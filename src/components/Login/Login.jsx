import React from 'react';
import classes from './Login.module.css'
import {reduxForm, Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from '../../utils/validators/validator'
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import Redirect from "react-router-dom/es/Redirect";

const LoginForm = (props) => {
  return <div>
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="email">Email</label>
        <Field
          validate={required}
          id="email"
          name={"email"}
          type="text"
          placeholder={'email'}
          component={Input}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="password">Password</label>
        <Field
          validate={required}
          id="password"
          name={"password"}
          type="password"
          placeholder={'password'}
          component={Input}
        />
      </div>
      <div>
        <Field
          component={Input}
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
    const { email, password, rememberMe } = formData
    props.login(email, password, rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>;
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);

