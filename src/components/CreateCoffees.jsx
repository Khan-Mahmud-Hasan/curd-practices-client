import React from 'react';
import Swal from 'sweetalert2';

const CreateCoffees = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                // after send dat received acknowledge  
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        timer: 3000,
                    })
                }
            })
    }
    return (
        <div>
            <div className='bg-[#F4F3F0] p-10 rounded-lg shadow-xl'>
                <h1 className='text-5xl font-semibold'>Add a Coffee</h1>
                <form onSubmit={handleAddCoffee}>
                    {/* row for name & Quantity */}
                    <div className='md:flex gap-4 justify-evenly items-center'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row for supplier & Taste */}
                    <div className='md:flex gap-4 justify-evenly items-center'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Supplier Name" name='supplier' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row for Company & Details */}
                    <div className='md:flex gap-4 justify-evenly items-center'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row for Company & Details */}
                    <div className='md:flex gap-4 justify-evenly items-center'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Name</span> */}
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className='btn mt-4 btn-block bg-red-300 hover:bg-red-500' />
                </form>
            </div>
        </div>
    );
};

export default CreateCoffees;