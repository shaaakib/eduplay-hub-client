import { useEffect, useState } from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';
import math from '../../../assets/math.png';
import engineering from '../../../assets/engineering.png';
import science from '../../../assets/science.png';

const ShopByCategory = () => {
  const [category, setCategory] = useState('');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://eduplay-hub-server.vercel.app/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  return (
    <div>
      <div data-aos="fade-right">
        <div className="flex">
          <div className="w-2 h-6 rounded-lg  bg-red-500"></div>
          <div className="ms-1 text-red-500 font-bold">Categories</div>
        </div>
        <p className="text-2xl font-semibold mt-2">Browse By Category</p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-full">
          <div className="flex justify-center mb-4" data-aos="zoom-in">
            <button
              className={`px-4 py-6 mr-2 w-24 rounded-lg text-sm font-medium focus:outline-none ${
                category === 'math toys'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setCategory('math toys')}
            >
              <img className="w-8 ms-3 mb-2" src={math} alt="" />
              <span className="">Math Toys</span>
            </button>

            <button
              className={`px-4 py-2 mr-2 w-24 rounded-lg text-sm font-medium focus:outline-none ${
                category === 'engineering kits'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setCategory('engineering kits')}
            >
              <img className="w-8 ms-4 mb-2" src={engineering} alt="" />
              <span className="">Engineering</span>
            </button>
            <button
              className={`px-4 py-2 mr-2 w-24 rounded-lg text-sm font-medium focus:outline-none ${
                category === 'science toys'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setCategory('science toys')}
            >
              <img className="w-8 ms-3 mb-2" src={science} alt="" />
              <span className="">Science Toys</span>
            </button>
          </div>
          <div
            className="grid grid-cols-1 gap-x-4 justify-center items-center  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {toys.map((toy) => (
              <ShopByCategoryCard key={toy._id} toy={toy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
