import "../Assets/css/Home.css";
import Logos from "../Assets/img/Logos";
import {useContext} from "react";
import Contexto from "../Context/Contexto";
import { ref, onValue, query, orderByChild } from "firebase/database";
import { db } from "../Services/Firebase";



export default function Home(){
    const {desconectar} = useContext(Contexto);

    const desconectarse = async () => {
       await desconectar();
    }



    return(

        <>  
            <div className = "body">
                <a onClick={desconectarse} className ="btnDesconectar" >Desconectar</a>
                <div className="area">
                    <h1>¡Bienvenido!</h1>
                    <h2>Seleccione un Contacto</h2>
                    <div className="cuadritoContacto">
                        <a href = "/" ><img alt = "logo "src={Logos.img6}></img></a>
                        <label>Luciano Rojas</label>
                        <label className="actividad">.</label>
                        {/* <a href = "/" ><img src={Logos.img6}></img></a>
                        <label>Martin Ortega</label> */}
                    </div>
                </div>
            </div>

        
        
        </>

    )
}