import React from 'react';
import { LoginForm } from '@/components/login-form';

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950">
      <div className="w-full max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
