import { ISODateString, UniqueId } from "@/shared/model";

export interface Todo {
  title: string;
  content: string;
  id: UniqueId;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}