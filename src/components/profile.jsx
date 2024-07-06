import React from 'react';

function Profile({name, lastname, age}) {
return(
    <div>
        <p>Bem Vindo {name} {lastname}</p>
        {age ? <p>{age}</p> : <p>Erro, não conseguiu ler a idade</p>}
    </div>
)
} 

export default Profile
