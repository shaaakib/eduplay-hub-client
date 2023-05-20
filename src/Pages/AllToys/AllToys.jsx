import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

export default function AllToys() {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState('');

  const url = `https://eduplay-hub-server.vercel.app/toys`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl">All Toys: {allToys.length}</h2>
      <div className="flex items-center justify-end">
        <div className="flex border-2 rounded">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="px-4 py-2 w-80"
            placeholder="Search..."
          />
          <button className="flex items-center justify-center px-4 border-l">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>

      {/* table  */}
      <div className="overflow-x-auto">
        <div className="flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="bg-white max-w-full overflow-x-auto shadow-md rounded my-6">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Seller Name</th>
                    <th className="py-3 px-6 text-left">Toy Name</th>
                    <th className="py-3 px-6 text-center">Category</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {allToys.map((allToy) => (
                    <AllToysRow key={allToy._id} allToy={allToy} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
