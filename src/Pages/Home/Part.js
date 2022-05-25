import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, productName, price, description, img, order_quantity, available_quantity } = part;
    const navigate = useNavigate();

    const navigateToPartDetail = id => {
        navigate(`/part/${id}`);
    }
    return (
        <div>
            <div className='p-5 border-2 rounded-lg'>
                <div>
                    <img className='object-cover rounded-lg mb-2' src={img} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-1'>{productName}</h3>
                    <p className='text-base mb-2'>{description}</p>
                    <p className='text-base font-bold'>Price: <small className='font-medium'>{price}</small></p>
                    <p className='text-base'>Order Quantity: <small>{order_quantity}</small></p>
                    <p className='text-base'>Available Quantity: <small>{available_quantity}</small></p>
                </div>
                <div>
                    <button onClick={()=> navigateToPartDetail(_id)} className='btn btn-accent w-full mt-4'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;