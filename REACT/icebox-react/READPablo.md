13-1-22
Inicialecé el proyecto REACT armando la estuctura de directorios y archivos principales, en un principio la cantidad de archivos ejs coincide con la de los jsx en react de mismo nombre pero uppercase.

El directorio Public ahora se nombra assets como Vite lo estructuró diferente a comparación de la estructura del proyecto inicial basado en express con sequelize, este directorio assets contiene lo mismo en cuestión de hojas de estilo e imágenes.

Al momento de empezar a armar los componentes sobre los archivos heredados de los partials solo al momento instalé la biblioteca de "react-router-dom", reemplazando las etiquetas a la sintaxis de React, <a href=> por <Link to=>, atributo "class" por "className".

Para que los Fragmentos (React.Fragment) te permiten agrupar una lista de hijos sin agregar nodos extra al DOM implementamos en la porción útil del ejs la agrupación con React.Fragment

Las etiquetas <link> (de head.jsx) las cuales no tienen cierre se agregó un cierre </link> si saber si es correcto y acto seguido da sin error aparentemente el componente en su sintaxis.

Seguimos por entender cómo vamos a solucionar los errores que pertenecen a porciones de codigo js insertado con sintaxis de html, como ser ejemplos de : <%= locals.userLogged.name %>  ó    <% if (locals.isLogged){ %>

===============================================================================================================================================================================

