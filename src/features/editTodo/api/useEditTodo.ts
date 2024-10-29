import { axiosInstance } from "@/shared/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { EditTodoRequest } from "../model/types"
import { convertToEditTodoRequestDto, convertToTodo } from "../lib/editTodoPort"
import { Todo } from "@/entities/todo"

export const useEditTodo = () => {
  const addTodo = async (request: EditTodoRequest): Promise<Todo> => {
    const response = await axiosInstance.put(`/todos/${request.id}`, convertToEditTodoRequestDto(request));

    return convertToTodo(response.data.data);
  }

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<Todo[]>(
        ['todos']
      );

      queryClient.setQueryData(['todos'], (old: Todo[]) => {
        if (!old) {
          return undefined;
        }
        const index = old.findIndex(
          ({ id }) => id === newTodo.id
        );
        if (index === -1) return old;

        return [
          ...old.slice(0, index),
          { ...newTodo, id: old[index].id },
          ...old.slice(index + 1),
        ];
      });
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}