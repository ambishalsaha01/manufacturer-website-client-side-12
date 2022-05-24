import React from 'react';
import GetParts from '../../Hooks/GetParts';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = GetParts();
    return (
        <div className='py-12'>
            <h2 className='text-center text-4xl font-bold text-accent'>Parts</h2>
            <div className='grid grid-cols-3 gap-5 mt-9 max-w-6xl mx-auto'>
                {
                    parts.slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;