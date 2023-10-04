"use client"
import { useState } from 'react';
import React from 'react';
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../components/modal'

type FormData = {
    companyName?: string; // Usa '?' para hacer la propiedad opcional
    companySector?: string;
    companyHistory?: string;
    companyInfo?: string;
    frequentQA?: string;
    productServiceInfo?: string;
    feeling?: string;
    // Agrega otras propiedades aquí
};



const MultiStep = () => {
    const divsData = [
        {
            id: 1,
            content: (
                <div className={`${styles.trainOpt}`}>
                    <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                    <p>
                        <b>Historia del Negocio</b> <br />
                        <span>Acá podrás llenar por qué se llama así tu negocio, cuál es la historia, cómo se fundó, etc.</span>
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className={`${styles.trainOpt}`}>
                    <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                    <p>
                        <b>Información del Negocio</b> <br />
                        <span>En esta sección podrás llenar información de sucursales, dirección y horarios de atención</span>
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className={`${styles.trainOpt}`}>
                    <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                    <p>
                        <b>Preguntas Frecuentes de los clientes y su respuesta</b> <br />
                        <span>Anota las preguntas que recuerdes y su respectiva respuesta (no tiene que ser extenso)</span>
                    </p>
                </div>
            ),
        },
        {
            id: 4,
            content: (
                <div className={`${styles.trainOpt}`}>
                    <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                    <p>
                        <b>Información de Productos/Servicios</b> <br />
                        <span>Información sobre los productos de la empresa, características, precios, promociones y descuentos.</span>
                    </p>
                </div>
            ),
        },
        {
            id: 5,
            content: (
                <div className={`${styles.trainOpt}`}>
                    <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                    <p>
                        <b>Análisis de Sentimiento</b> <br />
                        <span>Indica de qué manera quieres que responda el bot (Feliz, escéptico, cariñoso, etc.)</span>
                    </p>
                </div>
            ),
        },
    ];


    const [modals, setModals] = useState<{ isOpen: boolean; content: JSX.Element }[]>(
        [
            {
                isOpen: false,
                content: (
                    <div className={`${styles.modal}`}>
                        <h2>Historia de tu Empresa</h2>
                        <p>Cuéntale al cliente cómo surgió la idea de tu empresa y todo lo que crea que necesite saber el cliente</p>
                        <div>
                            <textarea className={`${styles.input}`} placeholder='Escribe aquí la historia de tu empresa' />
                            <div className={`${styles.prevNextcont}`}>
                                <button className={`${styles.next}`}>Cargar Información</button>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                isOpen: false,
                content: (
                    <div className={`${styles.modal}`}>
                        <h2>Información del Negocio</h2>
                        <p>Añade todos los productos que vendes, precios, descripción, promociones, etc.</p>
                        <div>
                            <textarea className={`${styles.input}`} placeholder='Escribe aquí la información de tu empresa' />
                            <div className={`${styles.prevNextcont}`}>
                                <button onClick={() => closeModal} className={`${styles.next}`}>Cargar Información</button>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                isOpen: false,
                content: (
                    <div className={`${styles.modal}`}>
                        <h2>Preguntas Frecuentes de los clientes y su respuesta</h2>
                        <p>Anota las preguntas que recuerdes y su respectiva respuesta (no tiene que ser extenso)</p>
                        <div>
                            Añade una pregunta frecuente
                            <div className={`${styles.prevNextcont}`}>
                                <button className={`${styles.next}`}>Añadir</button>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                isOpen: false,
                content: (
                    <div className={`${styles.modal}`}>
                        <h2>Información de Productos/Servicios</h2>
                        <p>Añande todos los productos que vendes, la descripción, el precio, imagen y una categoría si es necesario</p>
                        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                            <p>Productos Añadidos</p>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Producto/Servicio</th>
                                        <th scope="col" className="px-6 py-3">Tamaño de Imagen</th>
                                        <th scope="col" className="px-6 py-3">Precio Unitario</th>
                                        <th scope="col" className="px-6 py-3">Categoría</th>
                                        <th scope="col" className="px-6 py-3">Descripción</th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td className="px-6 py-4">Papita Rica Deli</td>
                                        <td className="px-6 py-4">200 KB</td>
                                        <td className="px-6 py-4">Bs. 20</td>
                                        <td className="px-6 py-4">Snacks</td>
                                        <td className="px-6 py-4">Rica Papita...</td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                                        </td>
                                    </tr>
                                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">Super Pipicono</td>
                                        <td className="px-6 py-4">720 KB</td>
                                        <td className="px-6 py-4">Bs. 20</td>
                                        <td className="px-6 py-4">Pollo</td>
                                        <td className="px-6 py-4">Contiene pollo y...</td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                                        </td>
                                    </tr>
                                    <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                                        <td className="px-6 py-4">Mega Salchipipoca</td>
                                        <td className="px-6 py-4">16 MB</td>
                                        <td className="px-6 py-4">Bs. 30</td>
                                        <td className="px-6 py-4">Fast Food</td>
                                        <td className="px-6 py-4">Mas de 200 gr...</td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={`${styles.prevNextcont}`}>
                                <button className={`${styles.next}`}>Añadir</button>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                isOpen: false,
                content: (
                    <div className={`${styles.modal}`}>
                        <h2>Análisis de Sentimiento</h2>
                        <p>Indica de qué manera quieres que responda el bot (Feliz, escéptico, cariñoso, etc.</p>
                        <div>
                            <input type="text" className={`${styles.input}`} placeholder='Escribe aquí el sentimiento de tu bot' /><br />
                            <div className={`${styles.prevNextcont}`}>
                                <button onClick={() => closeModal} className={`${styles.next}`}>Cargar Información</button>
                            </div>
                        </div>
                    </div>
                ),
            },
        ]
    );

    const openModal = (index: number) => {
        const updatedModals = [...modals];
        updatedModals[index].isOpen = true;
        setModals(updatedModals);
    };

    const closeModal = (index: number) => {
        const updatedModals = [...modals];
        updatedModals[index].isOpen = false;
        setModals(updatedModals);
    };

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({});

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className={`${styles.line} ${styles.line1}`}></div>
                        <div className={`${styles.body}`}>
                            <div className={`${styles.header1}`}>
                                ¡Bienvenido a <span>ADA</span>!
                            </div>
                            <div className={`${styles.header2}`}>
                                Para empezar, es necesario crear tu empresa
                            </div>

                            <label htmlFor=""><b>¿Cuál es el nombre de tu empresa?</b></label> <br />
                            <input type="text" className={`${styles.input}`} name='companyName' value={formData.companyName || ''} onChange={handleInputChange} placeholder='Llajuita Snacks' /><br />
                            <label htmlFor=""><b>¿A qué rubro pertenece tu empresa?</b></label> <br />
                            <input type="text" className={`${styles.input}`} name='companySector' value={formData.companySector || ''} onChange={handleInputChange} placeholder='Gastronomía' /> <br />

                            <div className={`${styles.prevNextcont}`}>
                                <button onClick={nextStep} className={`${styles.next}`}>Siguiente</button>
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className={`${styles.line} ${styles.line2}`}></div>
                        <div className={`${styles.body}`}>
                            <div className={`${styles.header1}`}>
                                Enséñale como <span>Vender</span>
                            </div>
                            <div className={`${styles.header2}`}>
                                Mientras más información compartas, el bot responderá de manera más precisa
                            </div>
                            <div className={`${styles.header3}`}>
                                Tiempo de llenado: 10 minutos
                            </div>

                            <div>
                                {divsData.map((div) => (
                                    <div key={div.id} onClick={() => openModal(div.id - 1)}>
                                        {div.content}
                                    </div>
                                ))}

                                {modals.map((modal, index) => (
                                    <Modal key={index} isOpen={modal.isOpen} onClose={() => closeModal(index)}>
                                        {modal.content}
                                    </Modal>
                                ))}
                            </div>

                            <div className={`${styles.prevNextcont}`}>
                                <button onClick={prevStep} className={`${styles.next}`}>Anterior</button>
                                <button onClick={nextStep} className={`${styles.next}`}>Siguiente</button>
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className={`${styles.line} ${styles.line3}`}></div>
                        <div className={`${styles.body}`}>
                            <div className={`${styles.header1}`}>
                                Testea a tu bot
                            </div>
                            <div className={`${styles.header2}`}>
                                Pregunta cualquier cosa en base a la información cargada en tu negocio
                            </div>
                            <input type="text" className={`${styles.input}`} placeholder='Envía un mensaje' /><br />
                            <div className={`${styles.prevNextcont}`}>
                                <Link className={`${styles.next}`} href='/dashboard'>Ir a mi Dashboard</Link>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`${styles.container}`}>
            <div className="steps">
                <div className={`${styles.tabs}`}>
                    <div className={`${styles.tab1}`}>Crea tu empresa</div>
                    <div className={`${styles.tab2}`}>Entrena a tu vendedor</div>
                    <div className={`${styles.tab3}`}>Testea a tu bot</div>
                </div>
            </div>
            {renderStep()}
        </div>
    );
};

export default MultiStep;