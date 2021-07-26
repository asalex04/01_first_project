import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classes from './Login.module.css'

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      toggle: false,
    },
    validationSchema: Yup.object().shape({
      login: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  });
  return <div>
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <div className={classes.field}>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          name="login"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.login}
          placeholder={'Login'}
        />
        {formik.errors.login ? <span className="error">{formik.errors.login}</span> : null}
      </div>
      <div className={classes.field}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='password'
        />
        {formik.errors.password ? <span>{formik.errors.password}</span> : null}
      </div>
      <div>
        <input
          name={'toggle'}
          type={'checkbox'}
          onChange={formik.handleChange}
          value={formik.values.toggle}
        />remember me
      </div>
      <button type="submit" className={classes.submitBtn}>Login</button>
    </form>
  </div>;
};

const LoginF = (props) => {
  return <div>
    <h1>LOGIN</h1>
    <LoginForm />
  </div>;
};

export default LoginF;

