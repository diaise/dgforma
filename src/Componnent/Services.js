import React from "react";



function Services({title, img, desc}){

    return(

        <div className="">
            <img className="service_img" src={img} alt="" />
            <h3 className="service_title">{title}</h3>
            <p className="service_desc">{desc}</p>
        </div>
    );
}
export default Services;