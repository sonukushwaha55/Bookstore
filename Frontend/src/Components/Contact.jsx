import React, { useState } from 'react';
import axios from 'axios'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/user/contact", {name, email, message});
            console.log(response);
            
            const contactData = {
                name,
                email,
                message,
            }
            console.log(contactData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email"  
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} 
                        required
                        className="w-full px-3 py-2 border rounded-lg outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message:</label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        required
                        className="w-full h-32 px-3 py-2 border rounded-lg outline-none "
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;