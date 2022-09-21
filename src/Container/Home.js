import "../Assets/css/Home.css";
import Logos from "../Assets/img/Logos";
import {useContext} from "react";
import Contexto from "../Context/Contexto";
import {doc, getDoc,setDoc} from "firebase/firestore"
import { fs } from "../Services/Firebase";




export default function Home(){
    const {desconectar,user,} = useContext(Contexto);
    const uid = user.uid;
    //get nombre del usuario logeado
    const displayNombre = user.displayName;
    const desconectarse = async () => {
        await desconectar();
        setDoc(doc(fs,"usuario",uid),{
        estado: "false",
        nombre: displayNombre,
        uid: uid, 
        });
    }

    // para obtener los valores del firestore
    getDoc(doc(fs, "usuario",uid )).then(docSnap => {
        if (docSnap.exists()) {
            const estadoUsuario = docSnap.data().estado; //obtengo el valor de lo que especifico despues del .
            if (estadoUsuario == "true"){
                document.getElementById('act').style.color = '#00ff1f';
            }
        } else {
            console.log("no hay nada");
        }
    })

   

    
    return(

        <>  
            <div className = "body">
                <a onClick={desconectarse} className ="btnDesconectar"  ><img alt = "desconectar" src={Logos.img7}></img></a>
                <form className="area">
                    <h1 >¡ Bienvenido {displayNombre} !</h1>
                    <h2>Seleccione un Contacto</h2>
                    <div className="cuadritoContacto">
                        {/* primero */}
                        <a href = "/" ><img alt = "logo "src={Logos.img6}></img></a>
                        <label> {displayNombre} </label>
                        <label className="actividad" id="act">.</label>
                    </div>
                    <div className="cuadritoContacto">
                        {/* segundo */}
                        <a href = "/" ><img src={Logos.img6}></img></a>
                        <label>Martin Ortega</label>
                        <label className="actividad" id="act">.</label>
                    </div>
                </form>
                <form className="areaMensajes">
                    <input type="text" id="input" placeholder="Ingrese su Mensaje Aqui..."></input>
                    <div>
                        <button className="button1"><img alt = "Enviar" src={Logos.img8}></img></button>
                    </div>
                    
                </form>
            </div>

        
        
        </>

    )
}