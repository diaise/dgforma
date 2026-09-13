import React from 'react';
import './Bog.css';

const Bog = () => {
    return (
        <section className="container bog">
            <div className="box1">
                <h1>DGFORMA, l’école qui vous forme aux
                    <span> métiers de demain ! </span>
                </h1>
            </div>
            <div className="boxbog">
                <span> Un projet ? Une formation en ligne DGFORMA ! </span>
                <p>DGFORMA accompagne celles et ceux qui souhaitent prendre leur avenir en main. Notre offre s’adresse à tous les profils (personnes en poste, demandeurs d’emploi, jeunes et bien plus encore !), avec un large choix de formations dans des domaines d'avenir : marketing, ressources humaines, développement web, commerce, design, comptabilité, ou encore juridique.</p>
                
                <p>Formation longue diplômante ou formation courte certifiante : à chaque objectif son parcours ! DGFORMA vous accompagne à chaque étape, avec des dispositifs de financement variés (CPF, France Travail, alternance, entreprises) et des plans de paiement adaptés.</p>
            </div>
        </section>
    );
}
export default Bog;
