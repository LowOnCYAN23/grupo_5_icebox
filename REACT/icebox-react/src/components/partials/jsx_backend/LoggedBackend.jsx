import React from "react";
import {Link,Route,Routes} from "react-router-dom";


function LoggedBackend() {
    return (
        <nav className='right-nav-bar'>
            {local.isLogged?jsx:jsx}

            if (locals.isLogged){
                <>
                    <img src="../../../public/images/profileImages/= locals.userLogged.avatar" width="40" style="border-radius: 100%"/>
                    <div className='welcome-user'>
                        =locals.userLogged.name
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
                </>
            }
            else{
                <>
                    <div className='log-in'>
                        <Link to='/login'><i className="fas fa-sign-in-alt"></i></Link>
                    </div>
                    <div className='register-nav'>
                        <Link to='/register'><i className="fas fa-user-circle"></i></Link>
                    </div>
                </>
            }
            
        </nav>
    )
}

export default LoggedBackend;