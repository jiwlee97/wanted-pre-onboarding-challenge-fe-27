import { Timestamp, UniqueId } from "@/shared/model";

export interface Todo {
  title: string;
  content: string;
  id: UniqueId;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}