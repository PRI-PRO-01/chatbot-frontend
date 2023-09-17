import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='homePage'>
        <Image src={"/img/ada_logoMini.png"} className='img' alt='ADA' width={200} height={200} />
        <span>
          ADA AI<br />
          Copiloto de Ventas
        </span>
        <p>
          No pierdas ventas en tu negocio por no responder mensajes al WhatsApp. De eso nos encargamos nosotros y ahorra 10x el sueldo que pagarías a una persona.
        </p>
      </div>
    </>
  )
}
