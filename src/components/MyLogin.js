import React, { useState } from 'react';
import MyForm from './MyForm';



const MyLogin = ({ onLogin }) => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Entrer votre email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Ecrire votre mot de passe' },
  ];

  const handleLogin = (formData) => {
    const { email, password } = formData;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      onLogin(true);
      alert('Connexion réussie !');
    } else {
      alert('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="bg-gray-900 py-16">
    <div className="container mx-auto px-4"></div>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-4">Se connecter</h1>
      <MyForm fields={fields} onSubmit={handleLogin} />
    </div>
    </div>
  );
};

export default MyLogin;
