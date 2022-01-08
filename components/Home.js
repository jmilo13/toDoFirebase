import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)



const Home = ({userEmail, userName}) => {
  const [tasks, setTasks] = useState(null)

  useEffect(()=>{
    async function searchDocument (idDocument) {
      const ref = doc(firestore, `users/${idDocument}`)
      const document = await getDoc(ref)
      const data = document.data()
      data.tasks.length>0 && setTasks(data.tasks) 
    }
    searchDocument(userEmail)

  },[])

  return <>
    <h1>{userName ? `Hola ${userName}` : 'Bienvenido, has creado tu cuenta'}</h1>
    <Button onClick={()=>signOut(auth)}>Cerrar Sesión</Button>
    <NewTask/>
    <AllTasks tasks={tasks}/>
  </>
}

export default Home