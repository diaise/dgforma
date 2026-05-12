import React from "react";
import Services from "./Services";
import "./Formationlist.css";


function Serviceslist(){
  const services = [
    {
      title: 'developpeur web/5 mois',
      img: 'https://placehold.co/200x200',
      desc:'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio.',
    },

    {
      title: 'developpeur web/5 mois',
      img: 'https://placehold.co/200x200',
      desc:'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio.',
    },
    {
      title: 'developpeur web/5 mois',
      img: 'https://placehold.co/200x200',
      desc:'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio.',
    },
    {
      title: 'developpeur web/5 mois',
      img: 'https://placehold.co/200x200',
      desc:'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio.',
    },
    {
      title: 'developpeur web/5 mois',
      img: 'https://placehold.co/200x200',
      desc:'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio.',
    },
    {
      title: 'developpeur web/5 mois',
      img: 'https://placehold.co/200x200',
      desc:'Sed commodo posuere pede. Mauris ut est. Ut quis purus. Sed ac odio.',
    },
  ];

  return(
    <div className="formationlist">
       <h2 className="formation-title">Services</h2>
        <div className="formationlist-list">
          {
            services.map((services,index) =>{
              return <Services key={index} {...services}/>; 
            })
          } 
        </div>
    </div>
  );
}
export default Serviceslist;