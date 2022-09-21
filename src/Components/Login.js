import "../Assets/css/Login.css";
import Logos from "../Assets/img/Logos";
import { useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import Contexto from "../Context/Contexto";




export default function Login () {


    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const {registro,login,loginGoogle,loginGithub,loginFacebook,reiniciarContraseña} = useContext(Contexto);

    const navigate = useNavigate();
    
    const registrarse = async (e) => {
        e.preventDefault();
        await registro(email,password);
        navigate("/");
    }
    const logearse = async (e) => {
        e.preventDefault();
        await login(email,password);
        navigate("/");
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
                            <a><img src={Logos.img4}/></a>
                            <a><img src={Logos.img5}/></a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


