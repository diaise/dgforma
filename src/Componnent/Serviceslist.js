import React from "react";
import Services from "./Services";
import "./Services.css";


function Serviceslist(){
  const formations = [
    {
      title: 'Développement web',
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2l0ZSUyMGludGVybmV0fGVufDB8fDB8fHww',
      desc:'Développeur intégrateur web',
    },

    {
      title: 'Marketing, Communication',
      img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpdGUlMjBpbnRlcm5ldHxlbnwwfHwwfHx8MA%3D%3D', 
      desc:'Community manager',
    },
    {
      title: 'Design graphique - UX/UI',
      img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNpdGUlMjBpbnRlcm5ldHxlbnwwfHwwfHx8MA%3D%3D',
      desc:'Designeur UX/UI',
    },
    {
      title: 'Développement web',
      img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D',
      desc:"Développeur d' aplication Python",
    },
    {
      title: 'Développement web',
      img: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm1hdGlvbiUyMGVuJTIwaW5mb3JtYXRpcXVlfGVufDB8fDB8fHww',
      desc:'Développeur java',
    },
    {
      title: 'developpeur web/5 mois',
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRldmVsb3BwZXVyJTIwd2VifGVufDB8fDB8fHww',
      desc:'Développeur Angular',
    },
  ];

  return(
    <div className="container">
       <h2>Services</h2>
        <div className="pocus">
          {
            formations.map((formation,index) =>{
              return <Services key={index} {...formation}/>; 
            })
          } 
        </div>
    </div>
  );
}
export default Serviceslist;