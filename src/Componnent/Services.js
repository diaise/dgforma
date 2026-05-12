import React from "react";
import './Formation.css'


function Services({title, img, desc}){

    return(
        <div className="formation">
            <h3>{title}</h3>
            <img src={img} alt="" />
            <p>{desc}</p>
        </div>
    );
}
export default Services;