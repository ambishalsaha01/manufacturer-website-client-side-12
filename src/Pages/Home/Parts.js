import React from 'react';
import GetParts from '../../Hooks/GetParts';

const Parts = () => {
    const [parts, setParts] = GetParts();
    return (
        <div>
            <h2>Parts</h2>
            <h2>{parts.length}</h2>
        </div>
    );
};

export default Parts;