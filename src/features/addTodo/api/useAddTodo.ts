import { axiosInstance } from "@/shared/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddTodoRequest } from "../model/types"
import { convertToAddTodoRequestDto, convertToTodo } from "../lib/addTodoPort"
import { Todo } from "@/entities/todo"

export const useAddTodo = () => {
  const addTodo = async (request: AddTodoRequest): Promise<Todo> => {
    const response = await axiosInstance.post('/todos', convertToAddTodoRequestDto(request));

    return convertToTodo(response.data.data);
  }

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] })
  
      const previousTodos: Todo[] | undefined = queryClient.getQueryData(['todos'])
  
      queryClient.setQueryData(['todos'], (old: Todo[]) => [...old, newTodo])
  
      return { previousTodos }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}