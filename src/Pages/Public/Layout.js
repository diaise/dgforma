import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Componnent/public/Header';
import Footer from '../../Componnent/public/Footer';
import Bandeau from '../../Componnent/public/Bandeau';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header/>
            <Bandeau/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
