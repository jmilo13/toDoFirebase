import React from "react";
import { Formik, ErrorMessage} from "formik";
import { Container, Stack, Form, Button } from 'react-bootstrap'

import styles from '@styles/newTask.module.scss'

import firebaseApp from "../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";


const firestore = getFirestore(firebaseApp)

const NewTask = ({showNew, setShowNew, tasks, userEmail, setTasks}) => {
  return <section className={styles.containerForm} onClick={()=>setShowNew(!showNew)}>
    <button className={styles.closeButton} onClick={()=>setShowNew(!showNew)}>X</button>
    <Container className={styles.form} onClick={(e)=>e.stopPropagation()}>
    <Formik
      initialValues={{ task: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.task) {
          errors.task = 'Este campo es obligatorio';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const task = values.task;
        const file = values.file ? values.file : '';
          
        const newTasks = tasks ? [...tasks, {id: new Date(), description: task, file: file}] :
         [{id: new Date() , description: task, file: file}]

        const ref = doc(firestore, `users/${userEmail}`)
        updateDoc(ref, {tasks:[...newTasks]})
        setTasks(newTasks)         
        setSubmitting(false);
        setShowNew(!showNew)
      }}
    >
      {({
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
        values,
      })=>(
        <Container>
          <Stack gap={3}>
            <h1>Agregar tarea</h1>
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Tarea</Form.Label>
                <Form.Control 
                  type="text" 
                  name="task" 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  value={values.task}
                />
                <ErrorMessage name="task" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Archivo</Form.Label>
                <Form.Control 
                  type="file" 
                  name="file" 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  value={values.file}
                />
                <ErrorMessage name="file" />
              </Form.Group>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Cargando" : "Agregar" }</Button>
            </form>       
          </Stack>
        </Container>
      )}      
    </Formik>
    </Container>   
  </section>
}

export default NewTask