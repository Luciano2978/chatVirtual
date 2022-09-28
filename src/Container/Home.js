import "../assets/css/Home.css";
import Logos from "../assets/img/Logos";

import { useContext, useEffect, useState, useRef} from "react";
import Contexto from "../Context/Contexto";
import { doc, DocumentSnapshot, setDoc, Timestamp } from "firebase/firestore";
import { db, fs } from "../Services/Firebase";
import {collection,getDocs,query,orderBy,addDoc,onSnapshot,where,} 
from "firebase/firestore";
import { get } from "firebase/database";
import { useResolvedPath } from "react-router-dom";

export default function Home() {
  const { desconectar, user } = useContext(Contexto);
  const [mensaje, setMensaje] = useState("");

  
  const desconectarse = async () => {
    const uid = user.uid;
    const displayNombre = user.displayName;
    await desconectar();
    setDoc(doc(fs, "usuario", uid), {
      estado: "false",
      nombre: displayNombre,
      uid: uid,
    });
  };

  const [messages, setMessage] = useState([]);
  const dummy = useRef();

  useEffect(() => {
    const q = query(collection(fs, "mensajes"),orderBy("fecha", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setMessage(docs);
    });
    return unsubscribe;
  }, []);


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const uid = user.uid;
    const displayNombre = user.displayName;
    // create a new `Date` object
    var today = new Date();
    // get the date and time
    var Fecha = today.toLocaleString();


    addDoc(collection(fs, "mensajes"), {
      mensajes: mensaje,
      fecha: Fecha,
      uid: uid,
      nombre: displayNombre,
    });

    dummy.current.scrollIntoView({ behavior: "smooth" });
    document.getElementById("input").value = "";
  };

  return (
    <>
      <a onClick={desconectarse} className="btnDesconectar">
        <img alt="desconectar" src={Logos.img7}></img>
      </a>
      <form className="areaMensajes">
        <input
          type="text"
          id="input"
          placeholder="Ingrese su Mensaje Aqui..."
          onChange={(ev) => setMensaje(ev.target.value)}
        />
        <label className="nombreUsuario">Grupo 4 </label>
        <div>
          <button className="button1" onClick={handleOnSubmit}>
            <img alt="Enviar" src={Logos.img8}></img>
          </button>
        </div>
        <div className="areaNuevaMensajes">
          <div ref={dummy}></div>
          <ul>
            {messages.map((mensaje) => (
              <li key={mensaje.id}>{mensaje.mensajes} <br></br> {mensaje.nombre} <br></br> {mensaje.fecha}</li>
            ))}
          </ul>
        </div>
      </form>
      <label className="label">Usuarios Activos en Este Momento</label>
    </>
  );
}
