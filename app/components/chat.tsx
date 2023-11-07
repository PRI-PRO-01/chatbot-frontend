'use client'
import React, { FormEvent } from 'react';
import { useState } from 'react';

interface Message {
    sender: 'user' | 'bot';
    content: string;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //const userMessage = (e.target as HTMLFormElement).content.value;
        const userMessage = (e.target as HTMLFormElement).content.value;
        addMessage('user', userMessage);
        const userMessageEncoded = encodeURIComponent(userMessage);

        //const url = `http://localhost:8000/chat/trained?message=${encodeURIComponent(userMessageEncoded)}`;
        const url = `http://localhost:8000/chat/trained?message=${userMessageEncoded}`;
    
        try{
            // Send a POST request to the backend
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            if (!response.ok) {
                console.error('Failed to send message to backend');
                return;
            }
        
            const botMessage = await response.text();
            const botMessageWithoutQuotes = botMessage.replace(/"/g, '');
            addMessage('bot', botMessageWithoutQuotes);
        }
        catch (error) {
            console.error('Error:', error);
        }
        (e.target as HTMLFormElement).content.value = '';
    };

    const addMessage = (sender: 'user' | 'bot', content: string) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender, content },
        ]);
    };

    return (
        <div className="w-full h-3/4 relative flex flex-col overflow-y-auto bg-black/20 mt-5 rounded-3xl">
            <div className="flex-grow pt-10 px-20">
                {messages.map((message, index) => (
                    <div key={index}
                        className={`w-fit max-w-xl rounded-b-3xl py-3 my-3
                            ${message.sender === 'user' ?
                                'text-right bg-blue-600 rounded-tl-3xl pl-3 pr-7 ml-auto'
                                : 'text-left bg-indigo-600 rounded-tr-3xl pl-7 pr-3'}`
                        }>
                        {message.content}
                    </div>
                ))}
            </div>
            <div className="sticky bottom-0 left-0 right-0 px-5 pt-7 pb-3 bg-gradient-to-t from-gray-800 via-gray-700 to-transparent">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="w-11/12 bg-gray-600 text-white rounded-l-full px-4 py-3" name="content" placeholder="Pregúntale algo a tu bot que un cliente preguntaría" />
                    <button type="submit" className="w-1/12 bg-gray-600 hover:bg-gray-700 text-white rounded-r-full px-4 py-3">Enviar</button>
                </form>
            </div>
        </div>
    )
}