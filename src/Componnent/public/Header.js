import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='pHeader'>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/About'>A propos</Link></li>
                    <li><Link to='/Service'>services</Link></li>
                    <li><Link to='/Contact'>contact</Link></li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Header;
