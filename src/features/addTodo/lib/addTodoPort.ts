import { Todo } from "@/entities/todo";
import { AddTodoRequestDto, AddTodoResponseDto } from "../api/types";
import { AddTodoRequest } from "../model/types";
import { isISODateString } from "@/shared/lib";

export const convertToAddTodoRequestDto = (addTodoRequest: AddTodoRequest): AddTodoRequestDto => {
  return {
    title: addTodoRequest.title,
    content: addTodoRequest.content,
  }
}

export const convertToTodo = (addTodoResponseDto: AddTodoResponseDto): Todo => {
  const { createdAt, updatedAt } = addTodoResponseDto;
  if (!isISODateString(createdAt)) {
    throw new Error("Invalid createdAt format, expected ISODateString");
  }
  if (!isISODateString(updatedAt)) {
    throw new Error("Invalid updatedAt format, expected ISODateString");
  }
  return {
    title: addTodoResponseDto.title,
    content: addTodoResponseDto.content,
    id: addTodoResponseDto.id,
    createdAt: createdAt,
    updatedAt: updatedAt
  }
}