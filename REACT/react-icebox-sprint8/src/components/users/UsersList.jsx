import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ApiUsersList() {
  const [usersList, setUsersList] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/users/')
          .then(({data}) => { 
              console.log(data);
              setUsersList(JSON.stringify(data));
              
              //console.log('usersList', usersList);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
          <h1>Prueba de ApiUsersList.jsx</h1>
          <p>{usersList}</p>
      </div>
    //console.log("ApiUsersList")
  )
};