import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  {/*¿que criterio aplicar con los estilos en determinados componentes?*/}
import App from './components/pages/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
