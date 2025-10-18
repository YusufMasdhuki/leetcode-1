import PublicLayout from '@/components/layout/public-layout';
import { lazy } from 'react';

const Login = lazy(() => import('@/components/pages/auth/login'));

export const authRoutes = {
  path: '/auth',
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Login />,
    },
  ],
};
