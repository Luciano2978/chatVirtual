import ContextoAuth from "./Contexto";
import { useEffect,useState } from "react";
import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,GithubAuthProvider,FacebookAuthProvider, fetchSignInMethodsForEmail, sendPasswordResetEmail, onAuthStateChanged} from "firebase/auth";
import { auth } from "../Services/Firebase";


export default function AuthContext(props){

    const { children } = props;

    //registrar

    const registro = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    };

    //logeo usuario y contraseña
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    };

    //login google
    const loginGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);
    };
    //login github
    const loginGithub = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth,githubProvider);
    };
    //login facebook
    const loginFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth,facebookProvider);
    }

    //desconectar
    const desconectar = () => {
        return signOut(auth);
    };
    //restablecer contraseña

    const reiniciarContraseña = async (email) => {
        return sendPasswordResetEmail(auth,email);
    };

    //para verificar si el usuario esta logeado o no

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    

    useEffect(() => {
        const unsubsucribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubsucribe();
    },[]);
    return(
        <>
            <ContextoAuth.Provider value={{
                registro,
                login,
                user,
                loading,
                loginGoogle,
                loginGithub,
                loginFacebook,
                desconectar,
                reiniciarContraseña
            }}>
                {children}
            </ContextoAuth.Provider>
        </>
    )

}