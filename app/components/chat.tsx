'use client'
import React, { FormEvent } from 'react';

export default function Chat() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el mensaje
    };

    return (
        <div className=" w-full h-3/4 relative flex flex-col overflow-y-auto bg-black/20 mt-5 rounded-3xl">
            <div className="flex-grow pt-10 px-20">
                {/*estilos mensajes del user */}
                <div className="text-right w-3/4 bg-blue-600 rounded-b-3xl rounded-tl-3xl py-3 pl-3 pr-10 my-1 ml-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero error, dolore ab maxime voluptates est deserunt saepe excepturi sed nostrum.
                </div>

                {/*estilos mensajes del bot */}
                <div className="text-left w-3/4 bg-indigo-600 rounded-b-3xl rounded-tr-3xl py-3 pl-10 pr-3 my-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, est. Ullam cumque, dignissimos animi necessitatibus totam tempore illo ea libero.
                </div>
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