import { useSuspenseQuery } from "@tanstack/react-query"
import { Todo } from "../model/types"
import { axiosInstance } from "@/shared/api";
import { convertToTodo } from "../lib/todoPort";

export const useTodoItem = (id: Todo['id']) => {
  return useSuspenseQuery<Todo>({
    queryKey: ['todos', id],
    queryFn: async (): Promise<Todo> => {
      const response = await axiosInstance.get(`/todos/${id}`);
      return convertToTodo(response.data.data);
    }
  })
}