import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partId } = useParams();

    const [part, setPart] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [part]);

    // handle quantity form
    const handleOrderQuantity = event => {
        event.preventDefault();
        const { order_quantity } = part;
        const oldquantity = parseInt(order_quantity);
        const restockquantity = parseInt(event.target.quantity.value);
        const totalQuantity = oldquantity + restockquantity;
        const updatedStock = { totalQuantity };
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                setPart(data);
                event.target.reset();
            })
    }

    // handle decreaseOrderQuantity form
    const decreaseOrderQuantity = event => {
        event.preventDefault();
        const { order_quantity } = part;
        const oldquantity = parseInt(order_quantity);
        const restockquantity = parseInt(event.target.quantity.value);
        const totalQuantity = oldquantity - restockquantity;
        const updatedStock = { totalQuantity };
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                setPart(data);
                event.target.reset();
            })
    }

    return (
        <div className='py-12 max-w-5xl mx-auto'>
            <div>
                <div className="grid p-5 md:grid-cols-2 gap-6">
                    <div>
                        <img className='object-cover' src={part.img} alt="service-img" />
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>{part.productName}</h4>
                        <p><small>{part.description}</small></p>
                        <p>Price: <small>{part.price}</small></p>
                        <p>Order Quantity: <small>{part.order_quantity}</small></p>
                        <p>Available Quantity: <small>{part.available_quantity}</small></p>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <form onSubmit={handleOrderQuantity} className='mt-3 add-form'>
                        <input name='quantity' className='input input-bordered input-accent' type="text" />
                        <button type='submit' className='btn btn-primary text-white'>Add Quantity</button>
                        <br />
                    </form>
                </div>
                <div className="text-center mt-5">
                    <form onSubmit={decreaseOrderQuantity} className='mt-3 add-form'>
                        <input name='quantity' className='input input-bordered input-accent' type="text" />
                        <button type='submit' className='btn btn-primary text-white'>Remove Quantity</button>
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;