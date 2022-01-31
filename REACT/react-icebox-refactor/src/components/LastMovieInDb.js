import axios from 'axios';
import React, {useEffect,useState} from 'react';
import imagenFondo from '../assets/images/048fc4548b2a11e7a2d3021976ae6e73.jpg';

function LastMovieInDb(){
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
                //setUsersLast((JSON.stringify(data).forEach()));
                //console.log('usersLast', usersLast);
            })
            .catch(e=>console.log(e))
        },[])
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">ULTIMO USUARIO REGISTRADO</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{usersLast}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">VOLVER AL INICIO</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
