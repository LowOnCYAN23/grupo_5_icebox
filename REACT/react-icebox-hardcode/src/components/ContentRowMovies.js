import axios from 'axios';
import React, {useEffect,useState} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

/* <!-- Total awards --> */
function ContentRowMovies(){
    //ENDPOINT CANTIDAD TOTAL USUARIOS
    const [users, setUsers] = useState([]);
        useEffect(()=>{
            axios.get('http://localhost:5000/api/users/list')
            .then(({data}) => { 
                console.log(data);
                setUsers(data.length);
            })
            .catch(e=>console.log(e))
        },[]);
    //ENDPOINT CANTIDAD TOTAL PRODUCTOS
    const [products, setProducts] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/products/list')
          .then(({data}) => { 
              console.log(data);
              setProducts(data.length);
            })
          .catch(e=>console.log(e))
      },[]);
    //ENDPOINT CANTIDAD TOTAL CATEGORIAS
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
        },[]);
      
let moviesInDB = {
        title: 'TOTAL DE USUARIOS',
        color: 'primary', 
        cuantity: users,
        icon:'fa-user-check' 
    };

let totalAwards = {
    title:'TOTAL DE PRODUCTOS', 
    color:'success', 
    cuantity: products,
    icon:'fa-clipboard-list'
};

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'TOTAL DE CATEGORIAS' ,
    color:'warning',
    cuantity:categories,
    icon:'fa-award'
};



let cartProps = [moviesInDB, totalAwards, actorsQuantity];


    return (
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            })}
        </div>
    )
}
export default ContentRowMovies;