"use client"
import { useState } from 'react';
import React from 'react';
import styles from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

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

                            <button onClick={nextStep} className={`${styles.next}`}>Siguiente</button>
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

                            <div className={`${styles.trainOpt}`}>
                                <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                                <p>
                                    <b>Historia del Negocio</b> <br />
                                    <span>Acá podrás llenar por qué se llama así tu negocio, cuál es la historia, cómo se fundó, etc.</span>
                                </p>
                            </div>
                            <div className={`${styles.trainOpt}`}>
                                <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                                <p>
                                    <b>Información del Negocio</b> <br />
                                    <span>En esta sección podrás llenar información de sucursales, dirección y horarios de atención</span>
                                </p>
                            </div>
                            <div className={`${styles.trainOpt}`}>
                                <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                                <p>
                                    <b>Preguntas Frecuentes de los clientes y su respuesta</b> <br />
                                    <span>Anota las preguntas que recuerdes y su respectiva respuesta (no tiene que ser extenso)</span>
                                </p>
                            </div>
                            <div className={`${styles.trainOpt}`}>
                                <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                                <p>
                                    <b>Información de Productos/Servicios</b> <br />
                                    <span>Información sobre los productos de la empresa, características, precios, promociones y descuentos.</span>
                                </p>
                            </div>
                            <div className={`${styles.trainOpt}`}>
                                <Image src={'/img/ada_logoMini.png'} width={50} height={50} className={`${styles.trainIcon}`} alt='icon' />
                                <p>
                                    <b>Análisis de Sentimiento</b> <br />
                                    <span>Indica de qué manera quieres que responda el bot (Feliz, escéptico, cariñoso, etc.)</span>
                                </p>
                            </div>

                            <button onClick={prevStep} className={`${styles.next}`}>Anterior</button>
                            <button onClick={nextStep} className={`${styles.next}`}>Siguiente</button>
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
                            <Link className={`${styles.next}`} href='/dashboard'>Ir a mi Dashboard</Link>
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