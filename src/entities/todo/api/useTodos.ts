import { axiosInstance } from "@/shared/api";
import { useSuspenseQuery } from "@tanstack/react-query"
import { Todo } from "../model/types";
import { TodoDto } from "./types";
import { convertToTodo } from "../lib/todoPort";

export const useTodos = () => {
  return useSuspenseQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const response = await axiosInstance.get<{ data: TodoDto[] }>('/todos');
      return response.data.data.map(convertToTodo);
    }
  });
}