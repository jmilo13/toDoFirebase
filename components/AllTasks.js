import React from "react";
import { Container, Stack, Button, Row, Col } from "react-bootstrap";

const AllTasks = ({tasks}) => { 
  return(
  <Container>
    <Stack>
      <h1>Lista de tareas</h1>
      {tasks ? tasks.map(task => {
        return(
          <React.Fragment key={task.id}>
          <Row>
            <Col>{task.description}</Col>
            <Col><Button>Ver</Button></Col>
            <Col><Button>Borrar</Button></Col>
          </Row>
          <hr/>
          </React.Fragment>
        )
      }): <>
        <p>No hay tareas</p>
        <Button>Agregar tarea</Button>
      </>}
    </Stack>
  </Container>
  )
}

export default AllTasks