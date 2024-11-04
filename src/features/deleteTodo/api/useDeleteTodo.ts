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
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}