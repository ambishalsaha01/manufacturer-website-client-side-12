import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase.Init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'https://thawing-fjord-45381.herokuapp.com/profile'
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
        <div className='max-w-xl mx-auto shadow-xl p-5'>
            <h2>User Name:{user.displayName}</h2>
            <h2>Email:{user.email}</h2>
            <div className="mt-5">
                <h2 className="text-center text-2xl font-bold mb-3">Add More Info</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered input-accent w-full mb-2' placeholder='location' type="location" {...register("location")} />
                    <br />
                    <input className='input input-bordered input-accent w-full mb-2' placeholder='phone number' type="phone" {...register("phone")} />
                    <br />
                    <input className='input input-bordered input-accent w-full mb-2' placeholder='city/district' type="city" {...register("city")} />
                    <br />
                    <input className='bg-accent text-white btn w-full' value='Add info' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;