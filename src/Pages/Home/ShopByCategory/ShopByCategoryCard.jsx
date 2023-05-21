import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopByCategoryCard({ toy }) {
  const { _id, picture, toy_name, description, rating, price } = toy;
  return (
    <div className="py-6 ">
      <div className="flex max-w-md h-60 relative   bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${picture})`,
          }}
          className="relative w-1/3  bg-cover bg-center bg-no-repeat rounded-lg"
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{toy_name}</h1>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          <div className="flex gap-x-2 item-center mt-2">
            <Rating style={{ maxWidth: 130 }} value={4.5} readOnly />
            <p>{rating}</p>
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
            <div className="">
              <button className="px-3 py-2 absolute bottom-0 right-0 my-4 mx-4  bg-gray-800 text-white text-xs font-bold uppercase rounded">
                <Link to={`/singletoy/${_id}`}>View</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
