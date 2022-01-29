import React, {useEffect,useState} from 'react';

export default function Ejemplo (){
  const [listaUser,setListaUser]= useState([])
}
useEffect(()=>{
  fetch('http://localhost:5000/api/users').then(res=>res.json).then( data=>{setListaUser(data).catch(err=>console.log(err))
},[]);

const ListUsers=data.map((user)=> <UserCardComponent key={user.userId} {...user}/>)

return(
  <div>
{ListUsers}
</div>
)


});

