import React from 'react';
import { Link } from 'react-router-dom';

const AddCoffee = () => {


    const handleAddCoffee = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)

//follow this step to send data to the server and database
    // data patha te hoile 
    // 1. method
    // 2. headers:{
    //      content-type:
    // }
    // 3. body : JSON.stringfy('jei object pathabo)
        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=>{console.log(data)
            alert('One coffe added in the list')
            e.target.reset();
        }) 

    }











    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add Coffee!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className='btn btn-wide btn-warning'><Link to='/'>Home page</Link></button>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;