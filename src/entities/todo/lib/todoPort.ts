import { isISODateString } from "@/shared/lib";
import { TodoDto } from "../api/types";
import { Todo } from "../model/types";

export const convertToTodo = (todoDto: TodoDto): Todo => {
  const { createdAt, updatedAt } = todoDto;
  if (!isISODateString(createdAt)) {
    throw new Error("Invalid createdAt format, expected ISODateString");
  }
  if (!isISODateString(updatedAt)) {
    throw new Error("Invalid updatedAt format, expected ISODateString");
  }
  return {
    title: todoDto.title,
    content: todoDto.content,
    id: todoDto.id,
    createdAt: createdAt,
    updatedAt: updatedAt
  }
  
}