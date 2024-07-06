import React from 'react';

function Projeto(){
    return(
        <div>
            <h1>Olá Turma!</h1>
            <p>Estamos iniciando o nosso primeiro projeto React</p>
            <form action="signIn">
                <h1>Sign in</h1>
                <label htmlFor="login">Login</label>
                <input type="email" id='login' name='login'/>
                <label htmlFor="password">Senha</label>
                <input type="password" id='password' name='password'/>
            </form>
        </div>
    )
}

export default Projeto