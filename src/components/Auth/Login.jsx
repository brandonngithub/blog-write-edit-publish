import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import AuthForm from './AuthForm';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const { user, token } = await loginUser(formData);
    localStorage.setItem('token', token);
    navigate('/dashboard'); // Or wherever you want to redirect
  };

  const fields = [
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <AuthForm 
        onSubmit={handleLogin} 
        buttonText="Login" 
        fields={fields} 
      />
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
