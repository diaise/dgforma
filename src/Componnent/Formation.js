import React from "react";
import './Formationlist.css'


function Formation({title, img, desc}){
    return(
        <div className="container">
            
            <img src={img} alt="formation développeur web" />
            <h3 className="">{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
export default Formation;

