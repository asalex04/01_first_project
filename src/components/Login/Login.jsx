import React from 'react';
import classes from './Login.module.css'
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {required} from '../../utils/validators/validator'
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
  return <div>
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.field}>
        {CreateField('email', 'Email', required, 'email', 'email', 'text', 'email', Input)}
      </div>
      <div className={classes.field}>
        {CreateField('password', 'Password', required, "password", "password", "password", "password", Input)}
      </div>
      <div>
        {CreateField(null, null, null, null, "rememberMe", "checkbox", null, Input, 'remember me')}
      </div>
      {error && <span className={style.formError}>
        {error}
      </span>}
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

