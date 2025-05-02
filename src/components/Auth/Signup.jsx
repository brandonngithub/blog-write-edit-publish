import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api';
import AuthForm from './AuthForm';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    const { user, token } = await registerUser(formData);
    localStorage.setItem('token', token);
    navigate('/dashboard'); // Or wherever you want to redirect
  };

  const fields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <AuthForm 
        onSubmit={handleSignup} 
        buttonText="Sign Up" 
        fields={fields} 
      />
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
