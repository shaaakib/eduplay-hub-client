import React from 'react';
import { Link } from 'react-router-dom';

export default function Featured() {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header data-aos="fade-right">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Science toys
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Online shopping for Science Kits & Toys from a great
                    selection at Toys & Games Kits for Kids
                  </p>
                </header>

                <Link
                  to="/"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link to="/" className="block group" data-aos="flip-left">
                    <img
                      src="https://m.media-amazon.com/images/I/91kPaJp1AfL._AC_SL1500_.jpg"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Great STEM Science Kit
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$59</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="block group" data-aos="flip-right">
                    <img
                      src="https://m.media-amazon.com/images/I/81BJWmbpObL._AC_SL1500_.jpg"
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Microscope STEM Kit
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$42</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
