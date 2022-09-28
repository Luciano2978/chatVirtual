import { useContext, useEffect } from "react";
import Contexto from "../Context/Contexto";
import ListaContactos from "../components/ListaContactos";



export default function Contactos(){
    
    const {lstContactos, pruebaContactos} = useContext(Contexto);
    useEffect(() =>{
        lstContactos();
    },[]);
    
    return(
        <>  
            {
                pruebaContactos.map((item) =>(
                    <ListaContactos {...item} key={item.id}></ListaContactos>
                    
                ))   
            }
        </>
    )
    

}