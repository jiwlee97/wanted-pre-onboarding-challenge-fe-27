import { axiosInstance } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTodoRequest } from "../model/types";
import { convertToAddTodoRequestDto, convertToTodo } from "../lib/addTodoPort";
import { Todo } from "@/entities/todo";
import { v4 as uuid } from 'uuid';
import dayjs from "dayjs";

export const useAddTodo = () => {
  const addTodo = async (request: AddTodoRequest): Promise<Todo> => {
    const response = await axiosInstance.post('/todos', convertToAddTodoRequestDto(request));

    return convertToTodo(response.data.data);
  }

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (addTodoRequest) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
  
      const previousTodos: Todo[] | undefined = queryClient.getQueryData(['todos']);

      const newTodo: Todo = {
        title: addTodoRequest.title,
        content: addTodoRequest.content,
        id: uuid(),
        createdAt: +dayjs(),
        updatedAt: +dayjs(),
      }
  
      queryClient.setQueryData(['todos'], (old: Todo[]) => [...old, newTodo]);
  
      return { previousTodos }
    },
    onError: (err, addTodoRequest, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}