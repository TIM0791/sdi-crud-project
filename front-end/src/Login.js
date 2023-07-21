import React from 'react';
import './style/login.css';

const Login = () => {
  return (
    <>
      <lable htmlFor='username'>Username</lable>
      <input type='text' id='username'></input>

      <label htmlFor='password'>Password</label>
      <input type='password' id='password'></input>

      <button>Submit</button>
    </>
  )
}

export default Login;