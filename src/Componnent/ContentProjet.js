import React from 'react';
import './ContentProjet.css';

const Bog = () => {
    return (
    <section>
        <div className='container'>
            <div className='two-coloms'>
                <div>
                    <h1>DGFORMA, l’école qui vous forme aux 
                        <span> métiers de demain ! </span>
                    </h1>
                </div>
                <div>
                    <span> Un projet ? Une formation en ligne DGFORMA ! </span>
                    <p> Notre offre s’adresse à tous les profils (personnes en poste, demandeurs d’emploi, jeunes et bien plus encore !), avec un large choix de formations dans des domaines d'avenir : marketing, ressources humaines, développement web, commerce, design, comptabilité, ou encore juridique.</p>
                    <p>Formation longue diplômante ou formation courte certifiante : à chaque objectif son parcours ! <span>DGFORMA</span> vous accompagne à chaque étape, avec des dispositifs de financement variés (CPF, France Travail, alternance, entreprises) et des plans de paiement adaptés.</p>
                    <p><span>DGFORMA</span> accompagne celles et ceux qui souhaitent prendre leur avenir en main.</p>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Bog;
