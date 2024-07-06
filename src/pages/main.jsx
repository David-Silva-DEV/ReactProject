import React, { useEffect, useContext } from 'react'

import Header from '../components/header';
import Footer from '../components/footer';
import Pessoas from '../components/pessoas';
import Profile from '../components/profile';
import ListaPessoas from '../components/listaPessoas';
import Aside from '../components/aside';
import { UserContext } from '../context/userContext';



function Main(){
   const {pessoas, setPessoas} = useContext(UserContext)
    
    useEffect(() => { 
		const fetchUsers = async () => {
			const response = await fetch('/pessoas.json');
				const data = await response.json();
			  	setPessoas(data);
		  };
		fetchUsers();
		}, [])
   
   
   
   
    return(
        <div>
           <Header/>
           <Aside/>
           <div className='main-content'>
                <h1> Some Stuff </h1>
                <Pessoas pessoas={pessoas}/>
                <Profile name={'David'} lastname={'Silva'} age={41}/> {/*Se não passar o valor de age, a página irá renderizar a mensagem 'Erro, não conseguiu ler a idade' */}
                <ListaPessoas name={'Fábio'} lastname={'Souza'} profession={'Designer'} age={'36'}/>

           </div>
           
           
           <Footer/> 
        </div>
    )

}

export default Main
