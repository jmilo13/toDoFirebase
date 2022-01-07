import React from "react";
import { Button } from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp)

const NewTask = () => {
  return <>
    <h1>Agregar Tarea</h1>
  </>
}

export default NewTask