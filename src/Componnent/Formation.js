import React from 'react';


const Pop = ({title, img, desc}) => {
    return (
        <div className=''>
            <img className='formation_img' src={img} alt=""/>
            <h3 className='formation_title'>{title}</h3>
            <p className='formation_desc'>{desc}</p>
        </div>
    );
}

export default Pop;

