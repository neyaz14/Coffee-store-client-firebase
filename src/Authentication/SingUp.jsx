import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SingUp = () => {
    const { user, loading, singUp } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        console.log(name, email, password);
        singUp(email, password)
            .then(res => {
                console.log(res.user);
                alert("successfully registered")
                const createdtime = res.user.metadata.creationTime;
                const newUser = { name, email, password, createdtime };
                // res.user.metadata.creationTime
                // res.user.metadata.lastSignInTime


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))



            })
            .catch(error => {
                alert(error.message)

            })

    }



    return (
        <div className="hero  bg-amber-100 min-h-screen">
            <div className="hero-content flex-col gap-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-amber-950">Register !</h1>

                </div>
                <div className="card bg-amber-50 w-full  shrink-0 shadow-2xl">
                    {/* form content start from here */}
                    <form
                        onSubmit={handleRegister}

                        className="card-body">

                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            {/* name  */}
                            <input
                                name='name'
                                type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            
                        </div>
                        {/* login button  */}
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-900 text-white hover:bg-amber-100 hover:text-amber-950">Register</button>
                        </div>

                    </form>
                    <div className=" p-5 mt-6">
                        <p className='mb-3 text-amber-950 '>Allready have an accout  ? </p>
                        <button className="btn text-amber-950 btn-wide hover:bg-amber-900 hover:text-amber-100"><Link to='/login'>Login</Link></button>
                    </div>
                    {/*  ---------------------------------------------------------------------------- */}
                </div>
            </div>
        </div>
    );
};

export default SingUp;