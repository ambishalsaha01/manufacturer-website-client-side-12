import React from 'react';

const Review = ({review}) => {
    const {img, description, ratings, name} = review;
    return (
        <div>
            <div className='p-5 border-2 rounded-lg text-center'>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='text-center' src={img} />
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-1'>{name}</h3>
                    <p className='text-base mb-2'>{description}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;