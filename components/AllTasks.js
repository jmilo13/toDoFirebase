import React from "react";
import { Container, Stack, Button, Row, Col } from "react-bootstrap";
import firebaseApp from "../credentials";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp)

const AllTasks = ({tasks}) => { 
  return(
  <Container>
    <Stack>
      <h1>Lista de tareas</h1>
      {tasks.map(task => {
        return(
        <Row>
          <Col>{task.description}</Col>
          <Col><Button>Ver</Button></Col>
          <Col><Button>Borrar</Button></Col>
        </Row>
        )
      })}
    </Stack>
  </Container>
  )
}

export default AllTasks