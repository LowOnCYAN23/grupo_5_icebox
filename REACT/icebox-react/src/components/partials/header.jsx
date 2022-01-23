import React from "react";
import {Link,Route,Routes} from "react-router-dom"

function Footer() {
    <React.Fragment>

        <header className='main-header'>
            <div className='main-header-top'>
                <nav className='left-nav-bar'>
                    <div className='menu-button'>
                        <Link to='#'><i className="fas fa-bars"></i></Link>
                    </div>
                </nav>
                <nav className='center-nav-bar'>
                    <Link title='home' to="/index"><img src='../../../public/images/Logo2.svg' className='logo' alt='home'></Link>
                </nav>
                <nav className='right-nav-bar'>

                {local.isLogged?jsx:jsx}
    
                    <% if (locals.isLogged){ %>
                        <img src="../../../public/images/profileImages/<%= locals.userLogged.avatar %>" width="40"
                            style='border-radius: 100%;'>
                        <div className='welcome-user'>
                            <%= locals.userLogged.name %>
                        </div>

                        <div className='cart'>
                            <Link to='/productCart'><i className="fas fa-shopping-cart"></i></Link>
                        </div>
                        <div className='admon'>
                            <Link to="/admon"><i className="fas fa-crown"></i></Link>
                        </div>
                        <div className='log-out'>
                            <Link to='/logout'><i className="fas fa-sign-out-alt"></i></Link>
                        </div>
                        <% } else { %>
                            <div className='log-in'>
                                <Link to='/login'><i className="fas fa-sign-in-alt"></i></Link>
                            </div>
                            <div className='register-nav'>
                                <Link to='/register'><i className="fas fa-user-circle"></i></Link>
                            </div>
                            <% } %>

                </nav>
            </div>
            <section>
                <div className='main-header-bottom'>
                    <p> ¡Envío gratis por compras mayores de 50 USD! </p>
                </div>
            </section>
        </header>
    </React.Fragment>
}