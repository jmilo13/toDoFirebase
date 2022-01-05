import React, {useState} from "react";
import { Formik, ErrorMessage} from "formik";
import { Container, Stack, Form, Button } from 'react-bootstrap'
import firebaseApp from "../credentials";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(firebaseApp)

const Login = () => {
  const [isRegister, setIsRegister] = useState(true)
  return <>
    <Formik
      initialValues={{ name: isRegister ? 'default' : '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Este campo es obligatorio';
        }
        if (!values.email) {
          errors.email = 'Este campo es obligatorio';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Email inválido';
        }
        if(!values.password){
          errors.password = 'Este campo es obligatorio';
        }else if (values.password.length < 6) {
          errors.password = 'Mínimo 6 caracteres';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const name = values.name;
        const email = values.email;
        const password = values.password;
        console.log(isRegister)
        if(isRegister){
          console.log('ingreso')
          const user = await signInWithEmailAndPassword(auth, email, password)
          console.log(user)
        }else{
          const user = await createUserWithEmailAndPassword(auth, email, password)
          console.log(name);
          console.log(user);
        }
        setSubmitting(false);
        
      }}
    >
      {({
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        touched,
        errors
      })=>(
        <Container>
          <Stack gap={3}>
            <h1>{isRegister ? "Iniciar Sesión" : "Registrarse"}</h1>
            <form onSubmit={handleSubmit}>
            {!isRegister&& <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                  type="name" 
                  placeholder="Ariel" 
                  name="name" 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessage name="name" />
              </Form.Group>}
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="name@example.com" 
                  name="email" 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="**********" 
                  name="password" 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage name="password" />
              </Form.Group>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Cargando" : "Enviar" }</Button>
            </form>
            <Button onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Crear nueva cuenta" : "¿Ya tiene cuenta? Inicia Sesión"}</Button>
          </Stack>
        </Container>
      )}
      
    </Formik>
  </>
}

export default Login