import React from 'react';
import Deals from '../Deals/Deals';
import Footer from '../Footer';
import Header from '../Header/Header';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div>
         
            <Header></Header>
            <Deals></Deals>
            <Partners></Partners>
        </div>
    );
};

export default Home;