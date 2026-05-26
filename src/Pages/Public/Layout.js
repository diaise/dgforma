import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Componnent/public/Header';
import Slide from '../../Componnent/public/Slide';
import Footer from '../../Componnent/public/Footer';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header/>
            <Slide/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
