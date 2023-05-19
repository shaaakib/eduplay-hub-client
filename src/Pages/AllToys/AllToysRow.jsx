import React from 'react';
import { Link } from 'react-router-dom';

export default function AllToysRow({ allToy }) {
  const { _id, seller_name, toy_name, price, quantity, category } = allToy;
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <p>{seller_name}</p>
          </div>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{toy_name}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">{category}</div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">{quantity}</div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          ${price}
        </span>
      </td>

      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <Link to={`/singletoy/${_id}`}>
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              View
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}
