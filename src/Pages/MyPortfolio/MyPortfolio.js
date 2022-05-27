import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='py-12'>
            <div className='max-w-2xl mx-auto border-2 rounded-lg p-6'>
                <h2 className='text-2xl'>Name: Bishal Saha</h2>
                <p className='text-2xl'>Email: bishalsaha9989@gmail.com</p>
                <div className=' my-4'>
                    <h2 className='text-2xl font-bold'>Educational background:</h2>
                    <p className='font-bold'>BSc</p>
                    <ul>
                        <li>Univarsity: North Western Univarsity</li>
                        <li>Department: Computer Science</li>
                        <li>Year: Current Year</li>
                    </ul>
                    <p className='font-bold'>Diploma</p>
                    <ul>
                        <li>Institute: Gopalganj Polytechnic Institute</li>
                        <li>Department: Computer technology</li>
                        <li>Year: 2016-2020</li>
                    </ul>
                </div>
                <div className=' my-4'>
                    <h2 className='text-2xl font-bold'>Skills:</h2>
                    <ul className='list-disc list-inside'>
                        <li>Programming Language: javascript, Nodejs</li>
                        <li>Framework: React, Express.js</li>
                        <li>Database: Mongodb</li>
                        <li>Authentication: Firebase Authentication</li>
                        <li>Others: HTML5, CSS3, Bootstrap, Taildwind, GithHub, SASS</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Project Links:</h2>
                    <ul className='list-disc list-inside'>
                        <li>https://ambishalsaha01.github.io/influencer-gears/</li>
                        <li>https://creative-wedding-planing.netlify.app</li>
                        <li>https://react-laptop-mania.netlify.app</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;