import React from 'react';

const LoginForm = (props) => {
  return <div>
    <form>
      <div>
        <input placeholder={'Login'}/>
      </div>
      <div>
        <input placeholder={'Password'}/>
      </div>
      <div>
        <input type={'checkbox'}/>remember me
      </div>
      <div>
        <button>Login</button>
      </div>
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

