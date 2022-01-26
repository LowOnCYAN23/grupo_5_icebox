import React from "react";
import {Link,Route,Routes} from "react-router-dom";
      {/*¿que criterio aplicar con los estilos en determinados componentes?*/}   
import Header from "../partials/Header.jsx";
import Footer from "../partials/Footer.jsx";

function Home() {
    
    return(
    <>
        <body>
            <Header/>
                <main>
                    <section class='container'>
                        <article class='product'>
                            <img src="/src/assets/images/halo.jpg" alt="halo" class='images'/>
                            <div class='product-name'> Halo Infinite </div>
                            <div class='product-description'> La legendaria saga Halo regresa con la campaña de Master Chief
                                amplia hasta la fecha y una experiencia
                                multijugador gratuita revolucionaria.</div>
                            <div class='product-details'>
                                <a href="/productDetail"> Preventa disponible</a>
                            </div>
                        </article>

                        <article class='product'>
                            <img src="/src/assets/images/books.jpg" alt="books" class='images'/>
                            <p class='product-name'> Nuevos libros </p>
                            <p class='product-description'>
                                Los libros que te gustan, los más recomendados y best
                                sellers los encuentras aquí.</p>
                            <div class='product-details'>
                                <a href="/productDetail"> ver más</a>
                            </div>
                        </article>

                        <article class='product'>
                            <img src="/src/assets/images/ps5.jpg" alt="ps5" class='images'/>
                            <p class='product-name'> Accesorios </p>
                            <p class='product-description'> Sobrepasa los límites del juego
                                con la nueva generación de accesorios PlayStation®.</p>
                            <div class='product-details'>
                                <a href="/productDetail"> Ver productos disponibles</a>
                            </div>
                        </article>
                    </section>
                </main>
                <Footer/>
        </body>
    </>
    )
};

export default Home;