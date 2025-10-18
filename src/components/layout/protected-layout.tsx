import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  useEffect(() => {
    //   if (!user) navigate('/login');
    const token = localStorage.getItem('token');
    if (!token) window.location.href = '/auth';
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
