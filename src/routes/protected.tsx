import ProtectedLayout from '@/components/layout/protected-layout';

export const protectedRoutes = {
  path: '/admin',
  element: <ProtectedLayout />,
  children: [],
};
