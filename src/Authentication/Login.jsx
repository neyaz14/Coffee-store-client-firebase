import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { user, loading, singIn } = useContext(AuthContext);


    const handleLogin =e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const name = e.target.name.value;
        console.log( email, password);
        singIn(email, password)
        .then(res=>{
            console.log(res.user);
            alert('Succesfully logedin');

            const lastSignInTime = res.user.metadata?.lastSignInTime;
            console.log(lastSignInTime)
            const loginInfo = {email,   lastSignInTime}

            fetch(`http://localhost:5000/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            }).then(res=>res.json())
            .then(data => {
                console.log('sign in info updated in db', data)
            })



        }).catch(err=>{
            alert( err.message)
        })
    }
    return (
        <div className="hero  bg-amber-100 min-h-screen">
            <div className="hero-content flex-col gap-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-amber-950">Login Now !</h1>

                </div>
                <div className="card bg-amber-50 w-full  shrink-0 shadow-2xl shadow-amber-200">
                    {/* form content start from here */}
                    <form
                        onSubmit={handleLogin}

                        className="card-body">

                        {/* name */}
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* email  */}
                            <input
                                name='email'
                                type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* password */}
                            <input
                                name='password'
                                type="password" placeholder="password" className="input input-bordered" required />
                            {/* forget pw */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* login button  */}
                        <div className="form-control mt-6">
                            <button className="btn text-amber-100 bg-amber-900 btn-wide hover:bg-amber-100 hover:text-amber-900">Login</button>
                        </div>

                    </form>
                    <div className=" p-5 mt-6">
                        <p className='mb-3'>New here ? </p>
                        <button className="btn text-amber-950 btn-wide hover:bg-amber-900 hover:text-amber-100"><Link to='/singUp'>Register</Link></button>
                    </div>
                    {/*  ---------------------------------------------------------------------------- */}
                </div>
            </div>
        </div>
    );
};

export default Login;