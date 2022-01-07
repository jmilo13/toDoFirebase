import React from "react";
import { Button } from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";

const auth = getAuth(firebaseApp)

const array = [
  {
    description: 'Esta es una tarea',
  },
  {
    description: 'Esta es otra tarea',
  }
]
const Home = () => {
  return <>
    <h1>Home</h1>
    <Button onClick={()=>signOut(auth)}>Cerrar Sesión</Button>
    <NewTask/>
    <AllTasks tasks={array}/>
  </>
}

export default Home