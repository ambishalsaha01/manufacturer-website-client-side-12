import React from 'react';
import background from '../../images/banner/hero-banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${background})`}}>
            <div class="hero-content text-center">
                <div class="max-w-5xl">
                    <h1 class="text-5xl font-bold">Car Parts Manufacturer</h1>
                    <p class="py-6">A category is a way of classifying a part in inventory. The category appears as a one-letter abbreviation under Part Detail.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;