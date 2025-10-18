import type { LoginDataInterface } from '@/interfaces/login.interface';
import { loginSchema, type LoginFormData } from '@/lib/validator/auth';
import { login } from '@/services/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const useLogin = () => {
  const loginMutation = useMutation({
    mutationFn: (data: LoginDataInterface) =>
      login(data.username, data.password),
    onSuccess: (res) => {
      //redirect to app
      const { token } = res; // token dari api
      localStorage.setItem('token', token);
    },
    onError: (err) => {
      //show message error
      console.log('error', err);
    },
  });

  const handlerLogin = (data: LoginDataInterface) => {
    loginMutation.mutate(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  return { handlerLogin, register, handleSubmit, errors, isSubmitting };
};

export default useLogin;
