import React from 'react';
import Pop from './Pop';
import './Pop.css';

const PopList = () => {
    const formations = [
     {
        
        title: 'Marketing, Communication',
        img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpdGUlMjBpbnRlcm5ldHxlbnwwfHwwfHx8MA%3D%3D',
        desc: 'Community manager',
     },

     {
        title: 'Développement web',
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2l0ZSUyMGludGVybmV0fGVufDB8fDB8fHww',
        desc: 'Développeur intégrateur web',
     },

     {
        title: 'Design graphique - UX/UI',
        img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNpdGUlMjBpbnRlcm5ldHxlbnwwfHwwfHx8MA%3D%3D',
        desc: 'Designeur UX/UI',
     },
     
   ];

    return (
        <div className="container">
        <h2>Formations</h2>
         <div className="pop">
            {
             formations.map((formation,index ) =>{
                return <Pop key={index} {...formation}/>; 
            })
            }
         </div>
      </div>
    );
}
export default PopList;

