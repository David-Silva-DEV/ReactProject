import React from 'react';

function ListaPessoas ({name, lastname, profession, age}){
    return(
        <div>
            <p>Nome: {name}</p>
            <p>Sobrenome: {lastname}</p>
            <p>Profissão: {profession}</p>
            <p>Idade: {age}</p>
        </div>
    )
}
export default ListaPessoas