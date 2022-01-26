import React from "react";
import { Container, Stack, Button, Row, Col } from "react-bootstrap";

import firebaseApp from "credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore"
const firestore = getFirestore(firebaseApp)

const AllTasks = ({tasks, userEmail, setTasks}) => { 
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
          <Row>
            <Col>{task.description}</Col>
            <Col><Button>Ver archivo</Button></Col>
            <Col><Button onClick={() => deleteTask(task.id)}>Borrar</Button></Col>
          </Row>
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