import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const User = () => {

    const Loadedusers = useLoaderData();
    const [users, setusers] = useState(Loadedusers);
    // const {_id} = Loadedusers;
    // console.log(_id)

    const handleDelete = id => {
        // 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#451a03",
            cancelButtonColor: "#b45309",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Userid has been deleted.",
                    icon: "success"
                });

                // fetch data here 

                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remainingUsers = users.filter(us => us._id !== id);
                        setusers(remainingUsers);


                    })

            }


        });
    }

    return (
        <div>
            <h1 className='text-amber-950 font-bold text-5xl text-center my-4'>Registerd Users Info</h1>
            {/* <p>{users.length}</p> */}





            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className='table border my-10 text-amber-900  '>
                    <tr className='font-bold text-xl'>
                    <th className='border-amber-800 border'>{}</th>
                        <td className='border-amber-800 border'>Name</td>
                        <td className='border-amber-800 border'>Email</td>
                        <td className='border-amber-800 border'>Password</td>
                        <td className='border border-amber-800'>Created Time</td>
                        <td className='border border-amber-800'></td>
                    </tr>
                    {users.map(user =>
                        <tr key={user._id} className='font-medium text-[16px]'>
                            <th className='border-amber-800 border'>{user.lastSignInTime }</th>
                            <td className='border-amber-800 border'>{user.name}</td>
                            <td className='border-amber-800 border'>{user.email}</td>
                            <td className='border-amber-800 border'>{user.password}</td>
                            <td className='border border-amber-800'>{user.createdtime}</td>
                            <td className='border space-x-2 border-amber-800'>
                                <button
                                    onClick={() => handleDelete(user._id)}
                                    className='btn btn-outlinebtn text-amber-800 hover:bg-amber-100 btn-outline hover:text-amber-950'>X</button>
                                <button
                                    // onClick={ha/}
                                    className='btn btn-outlinebtn text-amber-800 hover:bg-amber-100 btn-outline hover:text-amber-950'>Edit</button>
                            </td>
                        </tr>
                    )}
                </table>


            </div>
        </div>
    );
};

export default User;