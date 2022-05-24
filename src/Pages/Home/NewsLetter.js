import React from 'react';

const NewsLetter = () => {
    return (
        <div className='py-12'>
            <div className='max-w-md mx-auto'>
                <h2 className='text-center text-4xl font-bold text-accent mb-5'>Subscribe Now</h2>
                <form>
                    <input type="email" placeholder="Enter Email" class="input input-bordered w-full max-w-xs" />
                    <button class="btn btn-active btn-accent">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;