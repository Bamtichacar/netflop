import React, { useState } from 'react';
import MyForm from './MyForm';

const MyRegister = () => {
  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Entrer votre nom' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Entrer votre email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Ecrire votre mot de passe' },
    { name: 'confirm-password', label: 'Confirm Password', type: 'password', placeholder: 'Retapez votre mot de passe' },
  ];

  const handleRegister = (formData) => {
    const { username, email, password } = formData;
    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Inscription réussie !');
  };

  return (
    <div className="bg-gray-900 py-16">
    <div className="container mx-auto px-4"></div>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-white font-bold mb-4">S'enregistrer</h1>
      <MyForm fields={fields} onSubmit={handleRegister} />
    </div>
    </div>
  );
};

export default MyRegister;
