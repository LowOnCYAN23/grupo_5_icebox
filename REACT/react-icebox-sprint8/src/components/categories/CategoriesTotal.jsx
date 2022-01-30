import axios from 'axios';
import React, {useEffect,useState} from 'react';

export default function CategoriesTotal() {
    const [categories, setCategories] = useState([])
        useEffect(()=>{
            axios.get('http://localhost:5000/api/categorieslist')
            .then(({data}) => { 
                console.log(data);
                //setCategories(JSON.stringify(data));
                setCategories(data.length);
                //console.log('users', users);
            })
            .catch(e=>console.log(e))
        },[])
    return (
        <div>
          <h1>TOTAL DE CATEGORIAS</h1>
          <p>{categories}</p>
        </div>
        //console.log('ApiProductsId')
    )
};