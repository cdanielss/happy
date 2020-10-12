import React from 'react';
import '../styles/pages/landing.css'; /* Css da pagina */
import logoImg from '../images/logo.svg'; /* Adicionando a uma variaviel uma imagem */
import { FiArrowRight} from 'react-icons/fi'; /* Icone */
import { Link } from 'react-router-dom'; /* Faz o direnaciomento sem recarregar  */

function Landing(){
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo"/>
                <main>
                <h1>Leve felicidade para o Mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                <strong>Rio do Sul</strong>
                <span>Santa Catarina</span>
                </div>
                
                <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;