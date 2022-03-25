import React from "react";
import { useEffect } from "react";
import { Container, Stack, Button, Row, Col } from "react-bootstrap";

import styles from '@styles/allTasks.module.scss'

import firebaseApp from "credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore"

const firestore = getFirestore(firebaseApp)

const AllTasks = ({tasks, userEmail, setTasks}) => { 
  
  useEffect(() => {
    document.querySelectorAll('.svgEmbebed').forEach(svg => {
      fetch(svg.dataset.src)
        .then(respuesta => respuesta.text())
        .then(xml => svg.innerHTML = xml);
    });
  })

  async function deleteTask(toDeleteId){
    const newTasks = tasks.filter((task) => task.id !== toDeleteId)
    const ref = doc(firestore, `users/${userEmail}`)
    updateDoc(ref, {tasks: [...newTasks]})
    setTasks(newTasks)
  }
  return(
  <Container>
    <Stack>
      <h1>Lista de tareas</h1>
      {tasks ? tasks.map(task => {
        return(
          <React.Fragment key={task.id}>
          <Stack direction="horizontal">
            <div className="me-auto">
              {task.description}
            </div>
            <Stack direction="horizontal" gap={2}>
              
            {task.file && 
              <a href={task.file} target="_blank">
              <Button variant="outline-primary">
                <div className="svgEmbebed" data-src="/icons/image-load.svg"></div>
              </Button></a>
            }
              <Button variant="outline-secondary">
                <div className="svgEmbebed" data-src="/icons/edit.svg"></div>
              </Button>
              <Button variant="outline-danger" onClick={() => deleteTask(task.id)}>
                <div className="svgEmbebed" data-src="/icons/close.svg"></div>
              </Button>
       
            </Stack>
          </Stack>
          <hr/>
          </React.Fragment>
        )
      }): <>
        <p>No hay tareas</p>
      </>}
    </Stack>
  </Container>
  )
}

export default AllTasks