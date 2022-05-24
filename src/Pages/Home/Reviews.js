import React from 'react';
import GetReviews from '../../Hooks/GetReviews';

const Reviews = () => {
    const [reviews , setReviews] = GetReviews()
    return (
        <div>
            <h2 className='text-center font-bold text-4xl'>Reviews {reviews.length}</h2>
        </div>
    );
};

export default Reviews;