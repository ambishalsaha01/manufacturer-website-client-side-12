import React from 'react';
import GetReviews from '../../Hooks/GetReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = GetReviews()
    return (
        <div>
            <h2 className='text-center font-bold text-4xl'>Reviews</h2>
            <div className='grid grid-cols-3 gap-5 mt-9 max-w-6xl mx-auto'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;