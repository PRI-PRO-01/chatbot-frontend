'use client'
import React, { useState, ReactNode } from 'react';
import Image from 'next/image'
import Modal from './components/modal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const trainingInformation = (e.target as HTMLFormElement).info.value;
    const TrainingInfoEncoded = encodeURIComponent(trainingInformation);
 
    const url = `http://localhost:8000/datasource/?dataContent=${TrainingInfoEncoded}`;
    //Enviar al BackEnd
    if(trainingInformation.trim()){
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
   
        const responseData = await response.json();
        console.log(responseData);
   
        // Redirect to the desired page
        //router.push('/components/chat');
      }
      catch (error) {
          console.error('Error:', error);
      }
    }
    (e.target as HTMLFormElement).info.value = '';
  };

  return (
    <>
      <div className='homePage'>
        <Image src={"/img/ada_logoMini.png"} className='img' alt='ADA' width={180} height={180} />
        <span>
          ADA AI<br />
          Copiloto de Ventas
        </span>
        <p>
          No pierdas ventas en tu negocio por no responder mensajes al WhatsApp. De eso nos encargamos nosotros y ahorra 10x el sueldo que pagarías a una persona.
        </p>
        <button onClick={handleOpenModal} className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mt-6 p-5 text-3xl rounded-2xl border hover:font-extrabold'>
          Prueba el Chatbot
        </button>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className='max-w-3xl'>
            <h3 className='text-xl mb-5'>Hola, antes de continuar te pedimos que ingreses información necesaria para entrenar a tu bot y éste pueda responder de forma precisa</h3>
            <form onSubmit={handleSubmit} action={'./dashboard/conversations'}>
              <textarea rows={10} className='w-full p-3 rounded-xl text-black text-sm' name='info' placeholder='Escribe aquí tu catálogo (Ej. si vendes productos, ingresa el nombre de tus productos con sus respectivos precios)'></textarea>
              <button className=' w-full border rounded-2xl text-3xl p-2 hover:bg-white hover:text-gray-500 transition duration-300 ease-in-out' type='submit'>
                Continuar
              </button>
            </form>
          </div>
        </Modal>

      </div>
    </>
  )
}
