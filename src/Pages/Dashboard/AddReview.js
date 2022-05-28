import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'https://thawing-fjord-45381.herokuapp.com/review'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => { console.log(result) })
    };
    return (
        <div className='max-w-lg shadow-xl p-5 mx-auto'>
            <h2 className="text-center text-2xl font-bold mb-3">Add Your Review</h2>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered input-accent w-full mb-2' placeholder='Enter your name' type="Name" {...register("name", { required: true })} />
                    <br />
                    <textarea className='textarea textarea-accent w-full' placeholder='Enter description' type="description" {...register("description")} />
                    <input className='input input-bordered input-accent w-full mb-2' placeholder='ratings' type="price" {...register("ratings")} />
                    <br />
                    <input className='input input-bordered input-accent w-full mb-2' placeholder='Enter image url' type="img url" {...register("img")} />
                    <br />
                    <input className='bg-accent text-white btn w-full' value='Add Review' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;