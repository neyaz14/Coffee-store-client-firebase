import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../Components/CoffeeCard';
import Banner from './Banner';
import CardsDIV from './CardsDIV';

const Home = () => {
    const loadedcoffees = useLoaderData();
    const [Coffees, setCoffee] = useState(loadedcoffees);
    return (
        <div >
            <div>
                <Banner></Banner>
            </div>

            <div>
                <CardsDIV></CardsDIV>
            </div>
            
            


           
        </div>
    );
};

export default Home;