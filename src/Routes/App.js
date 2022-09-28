import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Home from "../Container/Home";
import AuthContext from "../Context/AuthContext";
import ProtetecRoute from "../components/ProtetecRoute";
import FirestoreContext from "../Context/FirestoreContext";
import Contactos from "../Container/Contactos";
export default function App(){
  
  return(
    <>
      <BrowserRouter>
          <AuthContext>
              <Routes>
                <Route exact path="/login" element={<Login />}></Route>
                {/* me lo manda directamente a home en este caso, usando outlet en layout */}
                <Route exact path="/" element={<Layout><ProtetecRoute><FirestoreContext ><Contactos /></FirestoreContext></ProtetecRoute></Layout>}></Route>
                {/* cuando ingresa un url desconocida, lo va a mandar aca */}
                <Route exact path="*" element={<Layout><ProtetecRoute><FirestoreContext ><Contactos /></FirestoreContext></ProtetecRoute></Layout>}></Route>
              </Routes>
          </AuthContext>
      </BrowserRouter>
    </>
  )

}