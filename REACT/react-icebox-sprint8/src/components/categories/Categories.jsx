import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function ApiCategories() {
  const [categories, setCategories] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/categories')
          .then(({data}) => { 
              console.log(data);
              setCategories(JSON.stringify(data));
              
              //console.log('users', users);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
        <h1>Prueba  6   de ApiCATEGORIES.jsx</h1>
        <p>{categories}</p>
      </div>
    //console.log('ApiProductsId')
  )
};