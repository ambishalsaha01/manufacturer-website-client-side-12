import React from 'react';
import NotFoundImg from '../../images/img404.png';

const NotFound = () => {
    return (
        <div>
            <div className='mx-auto max-w-md text-center py-10'>
                <img className='object-cover' src={NotFoundImg} alt="Error 404" />
            </div>
        </div>
    );
};

export default NotFound;