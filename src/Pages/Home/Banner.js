import React from 'react';
import background from '../../images/banner/hero-banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-center bg-no-repeat bg-cover object-cover" style={{backgroundImage: `url(${background})`}}>
            <div className="hero-content text-center">
                <div className="max-w-5xl">
                    <h1 className="text-5xl font-bold">Car Parts Manufacturer</h1>
                    <p className="py-6">A category is a way of classifying a part in inventory. The category appears as a one-letter abbreviation under Part Detail.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;