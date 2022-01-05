import React from "react";
import { Formik, ErrorMessage} from "formik";
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return <>
    <h1>Iniciar Sesión</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Este campo es obligatorio';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Email inválido';
        }
        if(!values.password){
          errors.password = 'Este campo es obligatorio';
        }else if (values.password.length < 5) {
          errors.password = 'Mínimo 5 caracteres';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              name="email" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.email}
            />
            <div>{errors.email && touched.email && errors.email}</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="**********" 
              name="password" 
              onChange={handleChange} 
              onBlur={handleBlur}
              value={values.password}
            />
            <div>{errors.password && touched.password && errors.password}</div>
          </Form.Group>
          <Button type="submit" disabled={isSubmitting}>Iniciar</Button>
        </form>
      )}
      
    </Formik>
  </>
}

export default Login