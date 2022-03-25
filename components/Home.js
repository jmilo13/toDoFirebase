import React, {useEffect, useState} from "react";
import Image from 'next/image'
import { Container, Button, Stack} from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import NewTask from "./NewTask";
import AllTasks from "./AllTasks";
import styles from "@styles/home.module.scss"
import ButtonCircle from "@components/ButtonCircle";

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)



const Home = ({userEmail, userName}) => {
  const [tasks, setTasks] = useState(null)
  const [show, setShow ] = useState(false)
  const [showNew, setShowNew] = useState(false)

  useEffect(()=>{
    async function searchDocument (idDocument) {
      const ref = doc(firestore, `users/${idDocument}`)
      const document = await getDoc(ref)
      const data = document.data()
      data.tasks.length>0 && setTasks(data.tasks) 
    }
    searchDocument(userEmail)

  },[])

  return (
  <section className={styles.homeContainer}>
    <header className={styles.header}>
      <h1>{userName ? `Hola ${userName}` : 'Bienvenido, has creado tu cuenta'}</h1>
    {/* <ButtonCircle color='green' icon='/icons/menu-white.png' click={()=> setShow(!show)}/> */}
      {/* <div className={show ? styles.toolsContainer : styles.none}> */}
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary" onClick={()=>setShowNew(!showNew)}>
          <div className="svgEmbebed" data-src="/icons/plus.svg"></div>
        </Button>
        <Button variant="danger" onClick={()=>signOut(auth)}>
          <div className="svgEmbebed" data-src="/icons/logout.svg"></div>
        </Button>
      </Stack>  
    </header>
    <Container>
      <AllTasks 
        tasks={tasks}
        userEmail={userEmail}
        setTasks={setTasks}
      />
    </Container>
    {showNew && <NewTask 
      showNew={showNew} 
      setShowNew={setShowNew}
      tasks={tasks}
      userEmail={userEmail}
      setTasks={setTasks}
    />}
  </section>
  )}

export default Home