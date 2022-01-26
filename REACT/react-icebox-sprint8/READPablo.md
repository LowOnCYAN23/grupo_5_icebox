13-1-22
Inicialecé el proyecto REACT armando la estuctura de directorios y archivos principales, en un principio la cantidad de archivos ejs coincide con la de los jsx en react de mismo nombre pero uppercase.

El directorio Public ahora se nombra assets como Vite lo estructuró diferente a comparación de la estructura del proyecto inicial basado en express con sequelize, este directorio assets contiene lo mismo en cuestión de hojas de estilo e imágenes.

Al momento de empezar a armar los componentes sobre los archivos heredados de los partials solo al momento instalé la biblioteca de "react-router-dom", reemplazando las etiquetas a la sintaxis de React, <a href=> por <Link to=>, atributo "class" por "className".

Para que los Fragmentos (React.Fragment) te permiten agrupar una lista de hijos sin agregar nodos extra al DOM implementamos en la porción útil del ejs la agrupación con React.Fragment

Las etiquetas <link> (de head.jsx) las cuales no tienen cierre se agregó un cierre </link> si saber si es correcto y acto seguido da sin error aparentemente el componente en su sintaxis.

Seguimos por entender cómo vamos a solucionar los errores que pertenecen a porciones de codigo js insertado con sintaxis de html, como ser ejemplos de : <%= locals.userLogged.name %>  ó    <% if (locals.isLogged){ %>

================================================================================================================================================
23-01-2022

Buscamos pensar la estructura de directorios y archivos con un diseño orgánico y funcional a la medida de nuestro proyecto, queriendo hacer simple la lógica de rutas y coherente al contexto de las ubicaciones de cada directorio y archivo.

El diseño es el clásico modelo en ramas.

Utilizando directorios referenciales en ramas principales con nombre de:
    ▀  "callbacks"      >>>> Contendrá los archivos de funciones a los endpoints y demás callbacks como ser APIs
    ▀  "css"            >>>> Hojas de estilo segmentada para la rama que integra
    ▀  "js_backend.jsx" >>>> Archivos que conecten o hagan solicitudes al backend
    ▀  "mocks"          >>>> Directorio para contener archivos para las pruebas con base de datos local

    De este modo podemos agregar otros directorios coherentes al contexto orgánico y fucional del proyecto.

En el terrono de las hojas de estilo la aproximación a la vieja usanza consiste en dejar algunos ids y classes por ahí, configurar reglas en el CSS, y esperar lo mejor. En CSS todo tiene, por defecto, ámbito global. Las definiciones anidadas (por ejemplo, .main .sidebar .button) crean una lógica implícita en los estilos. Ambas características incrementan la complejidad a medida que el proyecto va creciendo. Esta aproximación puede ser aceptable al comenzar, pero a medida que vayas desarrollando, irás queriendo migrar a otra solución.
Las alternativas a esto son en base a:
    METODOLOGIAS CSS
    PROCESADORES CSS (SASS)
    ESTILOS EN LÍNEA
    BIBLIOTECAS
    MODULOS CSS
Todavía no existen buenas prácticas, y todavía estamos tratando de encontrar la mejor manera de aplicar estilos con React.

Por lo pronto utilizaremos CSS plano a la vieja usanza por cuestión de tiempo, segmentando algunas hojas de estilo tal vez.
================================================================================================================================================
25-01-2022

Estamos trabados con como crear los endpoints como APIs REST para vincular el backend con el frontend de REACT.
================================================================================================================================================
26-01-282370262

Nos decidimos a generar un proyecto REACT básico para crear una estructura que funciones con pruebas sencillas y escalables, ya que el anterior muy completo en absoluto pudo funcionar sin errores.

Ahora armamos una estructura de varios componentes centralizados en el componente App.jsx implementando etiquetas Link y Routes.

Las pruebas de renderizado con textos e imagen funcionan sin fallas, continuamos con lograr los endpoints del tipo API para lograr las consignas, basicamente vamos a usar los mismos endpoints del proyecto principal con express y base de datos sql si faltaran endpoints estudiar como crearlos.

================================================================================================================================================