import { useEffect, useState } from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';

const ShopByCategory = () => {
  const [category, setCategory] = useState('');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://eduplay-hub-server.vercel.app/toys?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mr-2 text-sm font-medium focus:outline-none ${
              category === 'math toys'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setCategory('math toys')}
          >
            Math Toys
          </button>

          <button
            className={`px-4 py-2 mr-2 text-sm font-medium focus:outline-none ${
              category === 'engineering toys'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setCategory('engineering toys')}
          >
            Engineering Toys
          </button>
          <button
            className={`px-4 py-2 mr-2 text-sm font-medium focus:outline-none ${
              category === 'science toys'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setCategory('science toys')}
          >
            Science Toys
          </button>
        </div>
        <div className="grid grid-cols-1 gap-x-4 justify-center items-center  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {toys.map((toy) => (
            <ShopByCategoryCard key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
