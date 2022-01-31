import axios from 'axios';
import React, {useEffect,useState} from 'react';
//LISTADO DE USUARIOS DESDE ENDPOINT
export default function ApiUsersList() {
  const [usersList, setUsersList] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/users/list')
          .then(({data}) => { 
              console.log(data);
              setUsersList(JSON.stringify(data));
              //console.log('usersList', usersList);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
          <h1>LISTADO DE USUARIOS</h1>
          <p>{usersList}</p>
      </div>
    //console.log("ApiUsersList")
  )
};