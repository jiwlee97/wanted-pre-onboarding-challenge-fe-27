import { axiosInstance } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";

export interface SignUpRequest {
  email: string;
  password: string;
}

export const useSignUp = () => {
  const signUp = async ({ email, password}: SignUpRequest) => {
    await axiosInstance.post('/users/create', {
      email, password
    });
  }

  return useMutation({
    mutationFn: signUp,
  })
}