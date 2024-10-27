import { axiosInstance } from "@/shared/api";
import { useToast } from "@/shared/lib";
import { useMutation } from "@tanstack/react-query";

interface SignUpRequest {
  email: string;
  password: string;
}

export const useSignUp = () => {
  const signUp = async ({ email, password}: SignUpRequest) => {
    await axiosInstance.post('/users/create', {
      email, password
    });
  }

  const { toast } = useToast();

  return useMutation({
    mutationFn: signUp,
    onError: () => {
      toast({
        variant: 'destructive',
        title: "회원가입에 실패했습니다. 다시 시도해주세요."
      });
    },
    onSuccess: () => {
      toast({
        variant: 'success',
        title: "회원가입이 완료되었습니다."
      });
    },
  })
}