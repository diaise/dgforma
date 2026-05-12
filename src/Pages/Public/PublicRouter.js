import React from 'react';
import {Layout, Home, About, Service, Contact} from '../../Pages/Public';
import Error from '../../_utils/Error';
import { Routes, Route } from 'react-router-dom';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<Error/>}/>
            </Route>
        </Routes>
    );
}
export default PublicRouter;
