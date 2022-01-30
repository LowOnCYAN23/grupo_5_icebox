import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function CategoriesList() {
    const [categoriesList, setCategoriesList] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:5000/api/categorieslist')
            .then(({data}) => { 
                console.log(data);
                setCategoriesList(JSON.stringify(data));
                //setCategoriesList(data.length);
                //console.log('users', users);
            })
            .catch(e=>console.log(e))
        },[])
    return (
        <div>
          <h1>LISTA DE CATEGORIAS</h1>
          <p>{categoriesList}</p>
        </div>
        //console.log('ApiProductsId')
    )
};