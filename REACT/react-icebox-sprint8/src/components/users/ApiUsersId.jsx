import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ApiUsersId() {
  const [users, setUsers] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/users')
          .then(({data}) => { 
              console.log(data);
              setUsers(JSON.stringify(data));
              
              //console.log('users', users);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
          <h1>Prueba de ApiUsersId.jsx</h1>
          <p>{users}</p>
      </div>
    //console.log("ApiUsersId")
  )
};