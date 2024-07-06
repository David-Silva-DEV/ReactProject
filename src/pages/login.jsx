import React from 'react'

import Header from '../components/header';
import Footer from '../components/footer';
import Pessoas from '../components/pessoas';
import Profile from '../components/profile';
import ListaPessoas from '../components/listaPessoas';
import Aside from '../components/aside';
import { UserContext } from '../context/userContext';
import './login.css';


function Login(){
  return(
    <div id='form-login'>        
      <form action="signIn">
        <h1>Sign in</h1>
        <label htmlFor="login" name='login' id='lb-login'>Login</label>
        <input type="email" name='login' id='ip-login'/>
        <label htmlFor="password" name='password' id='lb-password'>Senha</label>
        <input type="password" name='password' id='ip-password'/>
      </form>
    </div>
)
}

export default Login
