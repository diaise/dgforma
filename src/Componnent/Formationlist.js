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
     {
      title: 'Transformation Digitale, Data et IA',
      img: 'https://placehold.co/300x200',
      desc: 'Vous souhaitez piloter des projets de transformation digitale et intégrer l’IA au cœur des stratégies d’entreprise ? Ce mastère vous permet de maîtriser les compétences essentielles pour analyser les besoins clients.',
   },
   {
      title: 'SEO et rédaction web',
      img: 'https://placehold.co/300x200',
      desc: 'Vous souhaitez booster le trafic de votre site web ? Vous avez pour objectif d’être plus visible sur les moteurs de recherche ? Ce cursus regroupant plusieurs formations vous permettra de maîtriser les bonnes pratiques en SEO et rédaction web pour optimiser le référencement de votre site sur la toile et sa promotion sur les réseaux sociaux.',
   },
   {
      title: 'Formation Photoshop',
      img: 'https://placehold.co/300x200',
      desc: 'Vous souhaitez réaliser des photos de qualité professionnelle et obtenir des visuels en haute définition ? Ce cycle certifiant vous apporte un panel de compétences pour créer des clichés qualitatifs et vous familiariser avec Photoshop, l’outil de référence pour la transformation des images.',
   },
   ];

   return(
      <div className="formationlist">
        <h2 className="formation-title">Formation</h2>
         <div className="formationlist-list">
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






