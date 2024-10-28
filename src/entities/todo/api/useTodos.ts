import { axiosInstance } from "@/shared/api";
import { useSuspenseQuery } from "@tanstack/react-query"
import { Todo } from "../model/types";

export const useTodos = () => {
  return useSuspenseQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await axiosInstance.get<{ data: Todo[] }>('/todos');
      return response.data.data;
    }
  });
}