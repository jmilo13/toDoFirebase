import React from "react";
import { Button } from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";
import ButtonCircle from "./ButtonCircle";

const auth = getAuth(firebaseApp)

const NewTask = () => {
  return <>
    <ButtonCircle color='blue' icon='/icons/plus.png'/>
  </>
}

export default NewTask