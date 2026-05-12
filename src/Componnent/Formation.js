import React from "react";
import './Formation.css'


function Formation({title, img, desc}){
    return(
        <div className="formation">
            <h3 className="">{title}</h3>
            <img src={img} alt="formation développeur web" />
            <p>{desc}</p>
        </div>
    );
}
export default Formation;

