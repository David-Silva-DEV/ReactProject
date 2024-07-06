import React  from "react";


function Pessoas({pessoas}){
    
  
    return (
        pessoas.map((element) =>{
            return (<ul>
                <li>Nome: {element['nome']}</li>
                <li>Sobrenome: {element['sobrenome']}</li>
                <li>Idade: {element['idade']}</li>
                <li>Profissão: {element['profissao']}</li>

            </ul>)
        })
    )

}

export default Pessoas