import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';

const MainLayout = () => {
    return (
        <div className='bg-amber-100'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;