import React from "react";
import './About.css';

const About = () =>{
 return(
    <section className="container pres">
      <div className="tod ">
        <h1>DGFORMA</h1>
        <h2>Centre de formation en ligne <span>100% gratuit*</span></h2>
        <p>
          Depuis 1999, Dgforma s'appuie sur la technologie pour révolutionner le monde de la formation. En créant les premiers cours en ligne, en développant la formation à distance et en misant sur l'interactivité, dès les débuts d’Internet ! 

Cet esprit pionnier du digital, c'est l'ADN de Dgforma... Et nous le poussons plus loin chaque jour en créant de nouvelles expériences d’apprentissage toujours plus innovantes et sociales.

Si la première révolution du monde de la formation s'est basée sur la technologie, nous sommes persuadés que sa prochaine révolution sera profondément humaine.

Nous pensons que la technologie doit être au service de l’homme, pas le contraire.
Nous pensons que la formation à distance doit renforcer nos liens, pas nous isoler. 

Nous pensons que la relation, l'accompagnement et la bienveillance sont les moteurs de vos futures réussites. 
Et enfin, nous pensons que votre formation doit être vraiment utile et en phase avec un marché de l'emploi qui bouge vite.
          </p>
      </div>
        <div className="tad">
          <img src="https://images.unsplash.com/photo-1590097520982-e342b117ebeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxlbnRyZXByaXNlJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid" alt="qui sommes nous"/>
      </div>
    </section>
  );
}
export default About;

