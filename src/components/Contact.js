import React from 'react';
import MyForm from './MyForm';

function Contact(){
    const fields = [ 
        { name: 'username', label: 'Username', type: 'text', placeholder: 'Entrer votre nom' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Entrer votre email' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Ecrire votre message' }, ]; 
        
        const handleSubmit = (formData) => {
             console.log('Form Data:', formData); 
            }; 
        return ( 
            <div className="bg-gray-900 py-16">
            <div className="container mx-auto px-4"></div>
            <div className="container mx-auto p-4"> 
                <h1 className="text-2xl font-bold mb-4 text-white">Keep in Touch</h1>
                 <MyForm fields={fields} onSubmit={handleSubmit} />
            </div> 
            </div>
        );
}
export default Contact;