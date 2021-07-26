import React from 'react';
import classes from './Login.module.css'

const LoginForm = () => {
  return <div>
    <form className={classes.form}>
      <div className={classes.field}>
        <label htmlFor="login">Login</label>
        <input
          id="login"
          name="login"
          type="text"
          placeholder={'Login'}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder={'password'}
        />
      </div>
      <div>
        <input type={'checkbox'}/>remember me
      </div>
      <button type="submit" className={classes.submitBtn}>Login</button>
    </form>
  </div>;
};

const Login = (props) => {
  return <div>
    <h1>LOGIN</h1>
    <LoginForm />
  </div>;
};

export default Login;

