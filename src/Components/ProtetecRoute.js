import { useContext } from "react";
import Contexto from "../Context/Contexto";
import { Navigate } from "react-router-dom";


export default function ProtetecRoute(props) {
    const { children } = props;
    const { user , loading } = useContext(Contexto);

    if (loading) return (<><div><h1>Cargando...</h1></div></>)

    if (!user) return <Navigate to="/login" />

    return (
        <>
            {children}
        </>
    )
}