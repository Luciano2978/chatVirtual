import { useContext } from "react";
import Contexto from "../Context/Contexto";
import { Navigate } from "react-router-dom";
import { fs } from "../Services/Firebase";
import { doc,setDoc, } from "firebase/firestore"




export default function ProtetecRoute(props) {
    const { children } = props;
    const { user , loading } = useContext(Contexto);
    



    if (loading) return (<><div><h1>Cargando...</h1></div></>)

    if (user) {
        const displayNombre = user.displayName;
        const uid = user.uid;
        setDoc(doc(fs,"usuario",uid),{
            nombre: displayNombre,
            estado: "true",
        });
    }
    /*
    else{
        setDoc(doc(fs,"usuario",uid),{
            estado: "false",
            uid: " ", 
        });

    }
    */



    if (!user) return <Navigate to="/login" />
    
    
    
    return (
        <>
            {children}
            
        </>
    )
}