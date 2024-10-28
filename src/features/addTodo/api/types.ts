export interface AddTodoRequestDto {
  title: string;
  content: string;
}

export interface AddTodoResponseDto {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}