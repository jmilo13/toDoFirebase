import React from "react";
import { Button } from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp)

const Home = () => {
  return <>
    <h1>Home</h1>
    <Button onClick={()=>signOut(auth)}>Cerrar Sesión</Button>
  </>
}

export default Home