import React, {useState} from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import firebaseApp from "../credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp)

const App = () => {
  const [user, setUser]= useState(null)
  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase)
    }else{
      setUser(null)
    }
  })
  return <>{user ? <Home/> : <Login/>}</>
};

export default App