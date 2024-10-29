import { axiosInstance } from "@/shared/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Todo } from "@/entities/todo"

export const useDeleteTodo = () => {
  const deleteTodo = async (todoId: Todo['id']) => {
    await axiosInstance.delete(`/todos/${todoId}`);
  }

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (deleteId) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] })
  
      const previousTodos: Todo[] | undefined = queryClient.getQueryData(['todos'])
  
      queryClient.setQueryData(['todos'], (old: Todo[]) => old.filter(({id}) => id !== deleteId))
  
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