import styles from './style.module.css'
import Image from 'next/image'
export default function loginPage(){
    return(
        <div className={`${styles.container}`}>
            <Image src={"/img/ada_logoMini.png"} alt='ADA' width={100} height={100} className={`${styles.img}`}/>
            <div className={`${styles.header1}`}>Inicia Sesión</div>
            <div className={`${styles.header2}`}>
                ¿Listo para comenzar a vender más en tu <br /> negocio por whatsapp?
            </div>
            <div className={`${styles.form}`}>
                <form action="get">
                    <input type="text" className={`${styles.input}`} placeholder='Correo Eletrónico'/><br />
                    <input type="password" className={`${styles.input}`} placeholder='Contraseña' /><br />
                    <input type="submit" className={`${styles.submit}`} value='Iniciar Sesión'/>
                </form>
                <div className={`${styles.thirdServices}`}>
                    <a href="#" className={`${styles.login3rd}`}>Iniciar Sesión con Google</a>
                    <a href="#" className={`${styles.login3rd}`}>Iniciar Sesión con Facebook</a>
                </div>
                <div className={`${styles.footer}`}>
                    ¿No tienes una cuenta?...
                    <a href="/signUp" className={`${styles.login}`}>Regístrate</a>            
                </div>
            </div>      
        </div>
    )
}