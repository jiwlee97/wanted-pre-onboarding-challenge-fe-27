import { Todo } from "@/entities/todo";
import { EditTodoRequestDto, EditTodoResponseDto } from "../api/types";
import { EditTodoRequest } from "../model/types";
import { isISODateString } from "@/shared/lib";

export const convertToEditTodoRequestDto = (editTodoRequest: EditTodoRequest): EditTodoRequestDto => {
  return {
    title: editTodoRequest.title,
    content: editTodoRequest.content,
  }
}

export const convertToTodo = (editTodoResponseDto: EditTodoResponseDto): Todo => {
  const { createdAt, updatedAt } = editTodoResponseDto;
  if (!isISODateString(createdAt)) {
    throw new Error("Invalid createdAt format, expected ISODateString");
  }
  if (!isISODateString(updatedAt)) {
    throw new Error("Invalid updatedAt format, expected ISODateString");
  }
  return {
    title: editTodoResponseDto.title,
    content: editTodoResponseDto.content,
    id: editTodoResponseDto.id,
    createdAt: createdAt,
    updatedAt: updatedAt
  }
}