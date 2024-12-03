import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const SpecificCoffee = useLoaderData();
    console.log(SpecificCoffee);
    const { _id, name, chef, supplier, taste, category, details, photo } = SpecificCoffee;



    const handleUpdateCoffee = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const updatedCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updatedCoffee)

//follow this step to send data to the server and database
    // data patha te hoile 
    // 1. method
    // 2. headers:{
    //      content-type:
    // }
    // 3. body : JSON.stringfy('jei object pathabo)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data=>console.log(data)) 

    }










    return (
        <div>

            <div className="card card-side  flex shadow-xl">
                <div className=''>
                    <figure>
                        <img src={photo} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{category}</p>
                    </div>
                </div>



            </div>

            <button className='btn btn-wide btn-warning'><Link to='/'>Home page</Link></button>


            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateCoffee}
                className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={name} type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input defaultValue={chef} type="text" name='chef' placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input defaultValue={supplier} type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input defaultValue={taste} type="text" name='taste' placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input defaultValue={category} type="text" name='category' placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input defaultValue={details} type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input defaultValue={photo} type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;






