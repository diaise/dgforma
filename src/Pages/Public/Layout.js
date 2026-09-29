import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../../Componnent/public/Header2';
import Footer from '../../Componnent/public/Footer';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header2/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
