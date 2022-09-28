import "../assets/css/Login.css";
import Logos from "../assets/img/Logos";
import { useNavigate } from "react-router-dom";

import { useState, useContext} from "react";
import Contexto from "../Context/Contexto";

export default function Login () {


    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ error, setError] = useState();

    const {registro,login,loginGoogle,loginGithub,loginFacebook,reiniciarContraseña} = useContext(Contexto);

    const navigate = useNavigate();
    
    const registrarse = async (e) => {
        e.preventDefault();
        await registro(email,password);
        navigate("/");
    }
    const logearse = async (e) => {
        e.preventDefault();
        try {
            await login(email,password);
            navigate("/");
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email") {
                setError("Correo Invaildo");
                } 
            else if (error.code === "auth/weak-password"){
                setError("La contraseña debe tener al menos 6 caracteres "); 
                }
            else if (error.code === "auth/email-already-in-use") {
                    setError("El Correo ya esta en uso");
                } 
            else if (error.code === "auth/user-not-found"){
                      setError("El Nombre de usuario no Existe");
                } 
            else if (error.code === "auth/wrong-password"){
                    setError("La contraseña es Incorrecta");
                } 
            else if(error.code === "auth/too-many-request"){
                    setError("El acceso a esta cuenta a sido inahabilitado, Tienes que cambiar inmediatamente tu contraseña o intentar mas tarde.")
                }
        }
    }
    const logearseGoogle = async () => {
        await loginGoogle();
        navigate("/");
    }
    const logearseGithub = async () => {
        await loginGithub();
        navigate("/");
    }
    const logearseFacebook = async () => {
        await loginFacebook();
        navigate("/");
    }
    const olvidarseContraseña = async (e) => {
        e.preventDefault()
        await reiniciarContraseña(email);
    }
    
    return(
        <>
            <div>
                <div className="login-box">
                    <h2>Bienvenido</h2>
                    <h3>Ingrese sus Datos para Continuar</h3>
                    <form id="loginform">
                        <div className="user-box">
                            <input type="email" name="" id="email"  onChange={(ev)=> setEmail(ev.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input tpye="password" name="" id="password"  onChange={(ev)=> setPassword(ev.target.value)}/>
                            <label>Contraseña</label>
                        </div>
                        <div>
                            {error && <p>{error}</p>}
                        </div>

                        <div>
                            <a onClick={logearse} >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Ingresar
                            </a>
                            <a onClick={registrarse}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Registrar
                            </a>
                        </div>
                        <div>
                            <a className="olvidarPass" onClick={olvidarseContraseña}>
                                ¿Olvidaste tu Contraseña?
                            </a>
                        </div>
                        <div className="botonimagen">
                            <a onClick={logearseGoogle}><img src={Logos.img1}/></a>
                            <a onClick={logearseGithub}><img src={Logos.img2}/></a>
                            <a onClick={logearseFacebook}><img src={Logos.img3}/></a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


