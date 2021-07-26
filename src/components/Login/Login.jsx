import React from 'react';
import classes from './Login.module.css'
import {reduxForm, Field} from "redux-form";

const LoginForm = (props) => {
  return <div>
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="login">Login</label>
        <Field
          id="login"
          name={"login"}
          type="text"
          placeholder={'Login'}
          component={'input'}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name={"password"}
          type="text"
          placeholder={'password'}
          component={'input'}
        />
      </div>
      <div>
        <Field
          component={'input'}
          type={'checkbox'}
          name={'rememberMe'}
        />remember me
      </div>
      <button type="submit" className={classes.submitBtn}>Login</button>
    </form>
  </div>;
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>;
};

export default Login;

