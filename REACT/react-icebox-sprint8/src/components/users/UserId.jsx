import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function UserId() {
  const [usersId, setUserId] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/usersId')
          .then(({data}) => { 
              console.log(data);
              setUserId(JSON.stringify(data));
              
              //console.log('usersId', usersId);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
          <h1>Prueba de UserId.jsx</h1>
          <p>{usersId}</p>
      </div>
    //console.log("UserId")
  )
};