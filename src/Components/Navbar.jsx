import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar py-5 flex justify-between items-center bg-amber-950">
                <button className="btn btn-ghost text-amber-100 font-bold text-xl "><Link to='/'>Espresso Emporium</Link></button>

                <div className='flex gap-5 mr-3'>
                    <button className='btn btn-outlinebtn text-amber-200 hover:bg-amber-100 btn-outline hover:text-amber-950'><Link to='/login'>Login</Link></button>


                    <button className='btn btn-outlinebtn text-amber-200 hover:bg-amber-100 btn-outline hover:text-amber-950'>
                        <Link to='/singUp'>
                        SingUp
                        </Link></button>
                    <button className='btn btn-outlinebtn text-amber-200 hover:bg-amber-100 btn-outline hover:text-amber-950'>
                        <Link to='/user'>
                        Registered Users
                        </Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;