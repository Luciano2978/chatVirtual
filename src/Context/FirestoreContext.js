import {useState } from "react";
import ContextoFirestore from "./Contexto";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { fs } from "../Services/Firebase";


export default function FirestoreContext(props){

    const { children } = props;

    
    const [estadoContactos, setEstadoContactos] = useState([]);

    //se crea la coleccion de datos
    //se referencia "usuario" a la coleccion del firestore

    const refContactos = collection(fs,"usuario");
    //para ordenar de ascendente a descendente
    const queryContactosOrdenar = query(refContactos,orderBy("app","asc"))
    
    /*
    const lstContactos = async () => {
        const querySnapshot = await getDocs(queryContactosOrdenar)
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(),id: doc.id})
        });
        setEstadoContactos(docs);
    }*/

    //prueba
    const lstContactos = async() => {
        const querySnapshot = await getDocs(collection(fs,"usuario"));
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(),id: doc.id})
        });
        setEstadoContactos(docs);
    }

    
    return (
        <>
            <ContextoFirestore.Provider value={{
                pruebaContactos: estadoContactos,
                lstContactos
            }}>
                {children}
            </ContextoFirestore.Provider>
        
        </>
    )


}
