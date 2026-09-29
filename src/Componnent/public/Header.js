import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo01 from './logo01.png';

const Header = () => {
    return (
        <div className='pHeader'>
            <div className='container'>
            <nav>
                <ul>
                    <li><img src={logo01} alt='logo' width={50} height={50}/></li>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/About'>Presentation</Link></li>
                    <li><Link to='/Service'>Services</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    );
}
export default Header;
