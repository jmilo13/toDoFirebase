import React, {useState} from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import firebaseApp from "../credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import '../styles/global-styles/global.scss'

const auth = getAuth(firebaseApp)

const App = () => {
  const [user, setUser]= useState(null)
  const [load, setLoad]= useState(true)
  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase)
    }else{
      setUser(null)
    }
    setLoad(false)
  },)
  return <>{load ? <h1>Cargado...</h1> : user ? <Home userEmail={user.email} userName={user.displayName}/> : <Login/>}</>
};

export default App