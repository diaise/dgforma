import React from 'react';
import './Content.css';


const Content = () => {
    return (
        <section className="container digital">
            <div className="box1">
                <h2>Accélérez votre carrière en vous formant au 
                    <span> Développement web</span>
                </h2>
            </div>
            <div className="box2">
                <p>Accessibles du Bac+2 au Bac+5 selon le métier visé, les formations en développement web se suivent en ligne, à votre rythme, et peuvent se compléter en alternance. Chez Dgforma, vous apprenez les langages et frameworks utilisés par les professionnels (HTML, CSS, JavaScript, PHP, Python) et vous vous formez à l'IA appliquée au développement : assistants de code, génération de tests et revue de code automatisée.</p>
                <p>Interfaces, API, déploiement : apprenez à votre rythme et livrez du code dès le 1er jour sur les technos qu'attendent les recruteurs</p>
            </div>
        </section>
        
    );
}
export default Content;
