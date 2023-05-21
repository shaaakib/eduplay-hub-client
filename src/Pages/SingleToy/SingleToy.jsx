import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import useTitle from '../../Hooks/useTitle';

export default function SingleToy() {
  const singleToys = useLoaderData();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  useTitle('ToyDetails');
  const { toy_name, picture, price, quantity, rating, description } =
    singleToys;

  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
              <div className="w-full  text-center flex sm:flex-col items-center justify-center">
                <img className="h-96 rounded-lg w-96" src={picture} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mb-6">
              <h2 className="mt-6 mb-4 text-2xl   font-heading font-medium">
                {toy_name}
              </h2>
              <p className="flex items-center mb-6">
                <span className="mr-2 text-3xl ">$</span>
                <span className="text-3xl  font-medium">{price}</span>
              </p>
              <p className="text-xl text-gray-800">{description}</p>

              <p className="text-lg mt-4 text-gray-800">Totol Reviews: 15</p>
            </div>
            <div className="flex mb-6 items-center">
              <Rating style={{ maxWidth: 120 }} value={4.5} readOnly />
              <span className="text-md ms-2">{rating}</span>
            </div>

            <div className="mb-10 flex gap-3">
              <h4 className="mb-3 font-heading font-medium">Qty:</h4>
              <span>{quantity}</span>
            </div>

            <div>
              <div className="border-t border-b py-4 mt-7 border-gray-200">
                <div
                  onClick={() => setShow(!show)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                    Shipping and returns
                  </p>
                  <button
                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    <svg
                      className={
                        'transform ' + (show ? 'rotate-180' : 'rotate-0')
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
                    (show ? 'block' : 'hidden')
                  }
                  id="sect"
                >
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are nonrefundable
                </div>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-200">
                <div
                  onClick={() => setShow2(!show2)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                    Contact us
                  </p>
                  <button
                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    <svg
                      className={
                        'transform ' + (show2 ? 'rotate-180' : 'rotate-0')
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
                    (show2 ? 'block' : 'hidden')
                  }
                  id="sect"
                >
                  If you have any questions on how to return your item to us,
                  contact us.
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button className="bg-gray-700 text-white text-xl  py-2 rounded-lg w-full">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
