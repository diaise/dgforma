import React from "react";
import Formation from "./Formation";
import './Formationlist.css'


function Formationlist(){
   const formations = [
     {
        
        title: 'Développeur intégrateur web',
        img: 'https://placehold.co/300x200',
        desc: 'Vous souhaitez vous lancer dans le développement web mais êtes débutant en informatique ? Ce cycle diplômant de niveau 5 vous donnera toutes les clés pour devenir un intégrateur développeur web.',
     },

     {
        title: 'Développeur web',
        img: 'https://placehold.co/300x200',
        desc: 'Vous souhaitez vous lancer dans le développement web mais êtes débutant en informatique ? Ce cycle diplômant de niveau 6 conçu spécialement pour les profils non-techniques vous donnera toutes les clés pour devenir un développeur web.',
     },

     {
        title: 'Management de la Cybersécurité',
        img: 'https://placehold.co/300x200',
        desc: 'Vous souhaitez devenir un expert en cybersécurité ? Avec cet Executive Mastère, développez des compétences stratégiques et opérationnelles pour analyser les risques, concevoir des architectures sécurisées, et protéger vos systèmes informatiques d’intrusions malveillantes.',
     },
     
   ];

   return(
      <div className="container">
        <h2 className="formation-title">Formations</h2>
         <div className="formation">
            {
             formations.map((formation,index ) =>{
                return <Formation key={index} {...formation}/>; 
            })
            }
         </div>
      </div>
   );
}
export default Formationlist;






