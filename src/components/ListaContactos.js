import Logos from "../assets/img/Logos";
import {doc, setDoc,updateDoc} from "firebase/firestore"
import { fs } from "../Services/Firebase";





export default function ListaContactos(props) {
  
    const { estado,nombre,id} = props;

    if (estado == "true"){

        return(
            <> 
                <div className="cuadritoContacto">
                    {/* primero  */}
                    <a ><img alt = "logo "src={Logos.img6}></img></a>
                    <label> {nombre} </label>
                    <label className="actividad" id="act">.</label>
                </div>

            </>
            
        )        
    }


}