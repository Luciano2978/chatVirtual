import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Login from "../Components/Login";
import Home from "../Container/Home";
import AuthContext from "../Context/AuthContext";
import ProtetecRoute from "../Components/ProtetecRoute";

export default function App(){
  
  return(
    <>
      <BrowserRouter>
        <AuthContext>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            {/* me lo manda directamente a home en este caso, usando outlet en layout */}
            <Route exact path="/" element={<ProtetecRoute> <Home /> </ProtetecRoute>}></Route>
            {/* cuando ingresa un url desconocida, lo va a mandar aca */}
            <Route exact path="*" element={<ProtetecRoute> <Home /> </ProtetecRoute>}></Route>
          </Routes>
        </AuthContext>
      </BrowserRouter>
    </>
  )


}