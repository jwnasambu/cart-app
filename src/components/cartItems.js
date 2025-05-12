import React, { useState, useEffect } from 'react';
import { products } from '../pages/products';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const { detail, setDetail } = useState([])
    
    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0];
        setDetail(findDetail);
      }, [productId])
    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={details.image} alt="" className='w-12' />
            <h3>{details.name}</h3>
            <p>${detail.price * quantity}</p>
            <div className='w-20 flex justify-between'>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'>-</button>
                <span>{quantity}</span>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'>+</button>
            </div>
        </div>
    )
}

export default CartItem;
