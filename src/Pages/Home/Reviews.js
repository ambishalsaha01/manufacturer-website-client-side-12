import React from 'react';
import GetReviews from '../../Hooks/GetReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = GetReviews()
    return (
        <div>
            <h2 className='text-center font-bold text-4xl'>Reviews</h2>
            <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-9 max-w-6xl mx-auto'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;