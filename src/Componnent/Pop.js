import React from 'react';


const Pop = ({title, img, desc}) => {
    return (
        <div className=''>
            <img className='pop_img' src={img} alt=""/>
            <h3 className='pop_title'>{title}</h3>
            <p className='pop_desc'>{desc}</p>
        </div>
    );
}

export default Pop;

