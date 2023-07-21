import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style/header.css';
import Login from './Login';

const Header = () => {

  return(
    <div className='header'>
      <Link to={'/'}>
        <img className='icon' src={require('./images/DALL·E 2023-07-20 09.38.48 - sphinx icon.png')} alt='Sphinx Emporium icon'/>
      </Link>
      <h1>Sphinx Emporium</h1>
      <Link to={'/login'}>
        <button id='login'>Employee Login</button>
      </Link>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}


export default Header;