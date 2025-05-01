import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './products';

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(product => product.slug === slug);
    if (foundProduct) {
      setDetail(foundProduct);
    } else {
      window.location.href = '/';
    }
  }, [slug]);

  if (!detail) return null;

  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt={detail.name || "Product Image"} className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5 items-center">
            <button className="bg-gray-100 h-10 w-10 font-bold">-</button>
            <span className="bg-gray-100 h-10 w-10 flex items-center justify-center">1</span>
            <button className="bg-gray-100 h-10 w-10 font-bold">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
