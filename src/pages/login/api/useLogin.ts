import { axiosInstance } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export const useLogin = () => {
  const login = async ({ email, password }: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post('/users/login', {
      email, password
    });
    return response.data;
  }

  return useMutation({
    mutationFn: login,
  })
}