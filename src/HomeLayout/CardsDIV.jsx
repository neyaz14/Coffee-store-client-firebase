import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../Components/CoffeeCard';

const CardsDIV = () => {


    const loadedcoffees = useLoaderData();
    const [Coffees, setCoffee] = useState(loadedcoffees);
    return (
        <div >
        

            <div>
                
            </div>

    
            <button className='btn  btn-warning'><Link to='/addCoffee'>Add coffee page</Link></button>


            <div className='w-11/12 mx-auto my-6 py-5 grid border grid-cols-2 '>
                {
                    Coffees.map(coffee => <CoffeeCard
                        coffee={coffee}
                        key={coffee._id}
                        Coffees={Coffees}
                        setCoffee={setCoffee}
                    ></CoffeeCard>
                    )
                }

            </div>
        </div>
    );
};

export default CardsDIV;