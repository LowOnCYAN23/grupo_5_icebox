import axios from 'axios';
import React, {useEffect,useState} from 'react';
//TOTAL DE USUARIOS
export default function UsersTotal() {
      
    const [users, setUsers] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:5000/api/users/list')
            .then(({data}) => { 
                console.log(data);
                setUsers(data.length);
            })
            .catch(e=>console.log(e))
        },[])
    return (  
    <div>
         <h1>TOTAL DE USUARIOS</h1>
         <p>{users}</p>
    </div>
  )
};