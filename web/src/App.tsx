import React from 'react';
import './styles/global.css';
import 'leaflet/dist/leaflet.css';
import Routes from './routes' /* importando as rotas */

function App() {
  return (
    <Routes /> /* Necessario para criacao de rotas */
  );
}

export default App;

/* Conectando front com back */
/* 
1 - yarn add axios

*/