import React from 'react';
import customer from '../../images/business-icon/customer.png'

const BusinessSummary = () => {
    return (
        <div className='py-12'>
            <h2 className='text-center font-bold text-4xl'>Business Summary</h2>
            <div className='grid grid-cols-3 gap-5 mt-9 max-w-6xl mx-auto'>
                <div class="card w-96 bg-primary shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='h-32' src={customer} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">We served 100+ customers</h2>
                    </div>
                </div>
                <div class="card w-96 bg-primary shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='h-32' src={customer} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">We served 100+ customers</h2>
                    </div>
                </div>
                <div class="card w-96 bg-primary shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='h-32' src={customer} />
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