import React, { useState , useEffect} from 'react';
import './styles.css';
import { Card } from '../../components/card';

export function App() {
  const [userName, setUserName] = useState();
  const [user, setUser] = useState([]);
  const [player, setPlayer] = useState({name:'', avatar: ''})

  function handleAddStudent () {
    const newUser = {
      name: userName,
      time: new Date().toLocaleString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };
    setUser(prevState => [...prevState, newUser]);
  }

  
  useEffect(() => {
    async function fetchData(){
      const responde = await fetch('https://api.github.com/users/lucasexprocha')
      const data = await responde.json();
      
      setPlayer({
        name: data.name,
        avatar: data.avatar_url
      })
      
    }
    
    fetchData()
  },[])


  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        
        <div>
          <p>{player.name}</p>
          <img src={player.avatar} alt="" className='profileImage'/>
        </div>
      </header>
      <input type="text" placeholder="Digite seu nome..." className='nickName'
        onChange={ e => setUserName(e.target.value)}
      />
      <input type="button" value="Enviar" className='button' onClick={handleAddStudent}/>

      {
        user.map(user => (
          <Card
           key={user.time}
           name={user.name}
           time={user.time}
          />
        )) //Percorre a lista
      }
    </div>
  )
}