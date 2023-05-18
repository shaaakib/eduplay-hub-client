import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

export default function AllToys() {
  const [allToys, setAllToys] = useState([]);

  const url = `https://eduplay-hub-server.vercel.app/toys`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  //   const { _id, toy_name, picture, price, quantity, category } = AllToys;

  return (
    <div>
      <h2 className="text-5xl">All Toys: {allToys.length}</h2>

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
