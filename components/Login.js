import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import { useState } from "react/cjs/react.development";

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
        values,
        touched,
        errors
      })=>(
        <Form onSubmit={handleSubmit}>
        <label for="email">Correo electrónico</label>
        <Field type="email" id="email" name="email" onChange={handleChange} value={values.email}/>
        {errors.email && touched.email && errors.email}
        <label for="password">Contraseña</label>
        <Field type="password" id="password" name="password" onChange={handleChange} value={values.password}></Field>
        {errors.password && touched.password && errors.password}
        <button type="submit" disabled={isSubmitting}>Iniciar</button>
      </Form>
      )}
      
    </Formik>
  </>
}

export default Login