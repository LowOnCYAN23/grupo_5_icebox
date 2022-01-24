import React from "react";
import {Link,Route,Routes} from "react-router-dom";

function Footer() {
    return(
       
        <footer className='main-footer'>
            <div className='main-footer-top'>
                <div className="footer-top">
                    <Link to='/index'>
                        <p className='buttons-footer'> Home </p>
                    </Link>
                    <Link to="#">
                        <p className='buttons-footer'> Quienes Somos </p>
                    </Link>
                    <Link to="/login">
                        <p className='buttons-footer'> Inicio sesión </p>
                    </Link>
                    <Link to="/register">
                        <p className='buttons-footer'> Nuevo usuario </p>
                    </Link>
                    <Link to="/admon">
                        <p className='buttons-footer'> Registro productos </p>
                    </Link>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='copyright'> ICEBOX 2021</p>
            </div>
        </footer>
    )
    
}
export default Footer;