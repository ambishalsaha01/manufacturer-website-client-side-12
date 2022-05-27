import React from 'react';
import customer from '../../images/business-icon/customer.png'

const BusinessSummary = () => {
    return (
        <div className='py-12 max-w-6xl mx-auto'>
            <h2 className='text-center font-bold text-4xl'>Business Summary</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-9 '>
                <div class="card bg-primary text-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='h-32' src={customer} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">We served 100+ customers</h2>
                    </div>
                </div>
                <div class="card bg-secondary text-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='h-32' src={customer} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">We served 100+ customers</h2>
                    </div>
                </div>
                <div class="card bg-accent text-white shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='h-32' src={customer} alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">We served 100+ customers</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;