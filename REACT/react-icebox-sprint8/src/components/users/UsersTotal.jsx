import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function UsersTotal() {
      
    const [users, setUsers] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:5000/api/users/list')
            .then(({data}) => { 
                console.log(data);
                // let i=(data.length)-1;
                // let ultimoUsuario=data[i];
                //setUsers(JSON.stringify(ultimoUsuario));
                setUsers(data.length);
                //setUsers(JSON.stringify(data));
                //setUsers((JSON.stringify(data).forEach()));//NO HAY FORMA QUE EL ARRAY 
                //console.log('users', users);  SE DESCOMPONGA EN OBJETOS INDIVIDUALES
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