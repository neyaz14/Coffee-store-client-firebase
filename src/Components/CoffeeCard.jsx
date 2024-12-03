import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, Coffees, setCoffee }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;


    const handleDelete = (_id) => {
        console.log(_id);
        // sweet alert

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'Delete',
                    // headers:{
                    //     'content-type':'application/json'
                    // },
                    // body: JSON.stringify(newCoffee)
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaingnig = Coffees.filter(coff => coff._id !== _id);
                            setCoffee(remaingnig);
                        }


                    })


            }
        });



    }







    return (
        <div className="w-[400px] mx-auto my-6 bg-amber-100 p-10 text-amber-950 card card-side  flex items-center justify-around shadow-xl">
            <div >
                <div className='flex'>
                    <figure>
                        <img src={photo} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{category}</p>
                    </div>
                </div>



            </div>
            <div className="card-actions  flex flex-col items-center ">
                <button className="w-14 btn btn-xs btn-success">Watch</button>
                <Link to={`/updateCoffee/${_id}`}><button className="w-14 btn btn-xs btn-warning">Edit</button></Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="w-14 btn btn-xs btn-error">Delete</button>
            </div>


        </div>




    );
};

export default CoffeeCard;