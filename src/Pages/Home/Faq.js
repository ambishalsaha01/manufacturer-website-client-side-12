import React from 'react';

const Faq = () => {
    return (
        <div className='py-12'>
            <h2 className='text-center text-4xl font-bold text-accent mb-5'>Faq</h2>
            <div className='max-w-6xl mx-auto'>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Why Chose us?
                    </div>
                    <div class="collapse-content">
                        <p>Our committed to helping its clients reach their goals, to personalising their event experiences, to providing an innovative environment, and to making a difference.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        Which services do we offer?
                    </div>
                    <div class="collapse-content">
                        <p>As guides through the maze of digital change, we help our clients deliver the amazing digital customer experiences that their clients demand. Different services are necessary for each case.</p>
                    </div>
                </div>
                <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div class="collapse-title text-xl font-medium">
                        What is pure service?
                    </div>
                    <div class="collapse-content">
                        <p>A pure service business is one in which the service is the primary entity that is sold. That distinction is important because everyone in every type of business sells some element of service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;