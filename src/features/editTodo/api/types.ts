export interface EditTodoRequestDto {
  title: string;
  content: string;
}

export interface EditTodoResponseDto {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}