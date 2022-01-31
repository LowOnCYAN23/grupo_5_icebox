import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function UsersTotal() {
    const [usersLast, setUsersLast] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:5000/api/users/list')
            .then(({data}) => { 
                console.log(data);
                let i=(data.length)-1;
                let ultimoUsuario=data[i];
                setUsersLast(JSON.stringify(ultimoUsuario));
                //setUsersLast(data.length);
                //setUsersLast(JSON.stringify(data));
                //setUsersLast((JSON.stringify(data).forEach()));//NO HAY FORMA QUE EL ARRAY 
                //console.log('usersLast', usersLast);  SE DESCOMPONGA EN OBJETOS INDIVIDUALES
            })
            .catch(e=>console.log(e))
        },[])
    return (  
        <div>
            <h1>ULTIMO USUARIO INGRESADO</h1>
            <p>{usersLast}</p>
        </div>
    )   
};