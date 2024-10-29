import { UniqueId } from "@/shared/model";

export interface EditTodoRequest {
  id: UniqueId;
  title: string;
  content: string;
}