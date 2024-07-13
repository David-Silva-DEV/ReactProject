import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Pessoas from '../components/pessoas';
import Profile from '../components/profile';
import ListaPessoas from '../components/listaPessoas';
import Aside from '../components/aside';
import { UserContext } from '../context/userContext';
import './login.css';


function Login(){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()
    const dados = await fetch('./usuarios.json')
    const usuarios = await dados.json()
    console.log(usuarios)

    for(let usuario of usuarios){
      console.log(usuario)
      if(usuario.email === email && usuario.senha === senha){
        navigate('./hero')
        break        
      }
    }
    console.log('senha incorreto')

  }

  const handleEmail = (target) => {
    setEmail(target.value);
  }

  const handleSenha = (target) => {
    setSenha(target.value);
    console.log(senha)
  }


  return(
    <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="email" placeholder="Email" 
                onChange={ ({ target }) => handleEmail(target) }
                value={email}
                required/>
                <input type="password" placeholder="Senha" 
                value={senha}
                onChange={ ({ target }) => handleSenha(target) }
                required/>
                <button type="submit">Entrar</button>
            </form>
        </div>
)
}

export default Login
