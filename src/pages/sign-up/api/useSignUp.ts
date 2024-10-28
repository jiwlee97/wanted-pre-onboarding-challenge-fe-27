import { axiosInstance } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  token: string;
}

export const useSignUp = () => {
  const signUp = async ({ email, password}: SignUpRequest): Promise<SignUpResponse> => {
    const response = await axiosInstance.post('/users/create', {
      email, password
    });
    return response.data;
  }

  return useMutation({
    mutationFn: signUp,
  })
}