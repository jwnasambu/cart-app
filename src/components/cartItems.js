import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { products } from '../products';
import { changeQuantity } from '../stores/cart';

const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find(p => p.id === productId);
    setDetail(product);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId,
      quantity: quantity - 1,
    }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId,
      quantity: quantity + 1,
    }));
  };

  if (!detail) return null;

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt={detail.name} className="w-12" />
      <h3>{detail.name}</h3>
      <p>${(detail.price * quantity).toFixed(2)}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
