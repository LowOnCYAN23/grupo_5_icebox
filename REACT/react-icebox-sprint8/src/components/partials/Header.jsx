import React from "react";
import {Link,Route,Routes} from "react-router-dom"
import LoggedBackend from "./jsx_backend/LoggedBackend.jsx"

function Footer() {
    return(
        <>
            <header className='main-header'>
                <div className='main-header-top'>
                    <nav className='left-nav-bar'>
                        <div className='menu-button'>
                            <Link to='#'><i className="fas fa-bars"></i></Link>
                        </div>
                    </nav>
                    <nav className='center-nav-bar'>
                        <Link title='home' to="/index"><img src='../../../public/images/Logo2.svg' className='logo' alt='home'/></Link>
                    </nav>
                    
                    <LoggedBackend/>   
                    
                </div>
                <section>
                    <div className='main-header-bottom'>
                        <p> ¡Envío gratis por compras mayores de 50 USD! </p>
                    </div>
                </section>
            </header>
        </>
    )
};
export default Footer;