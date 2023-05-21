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
  const {
    toy_name,
    seller_email,
    seller_name,
    picture,
    price,
    quantity,
    rating,
    description,
  } = singleToys;

  return (
    <div>
      <div>
        <section className="relative bg-[url(https://img.freepik.com/free-vector/flat-design-background-christmas-toys_23-2148355805.jpg?w=996&t=st=1684649182~exp=1684649782~hmac=187d552feae92f4003726cb51762c695520c10632baefbd482bd0624b61032e5)] bg-cover bg-center bg-no-repeat rounded-lg">
          <div className="absolute inset-0 bg-white/40 sm:bg-white/40 md:bg-white/40  sm:from-white/75 md:from-white/75 sm:to-white/95 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative px-4 py-32 sm:px-6 ">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-5xl text-center">{toy_name}</h2>

              <div className="mt-8 flex  gap-4 text-center justify-center"></div>
            </div>
          </div>
        </section>
      </div>
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
                      Seller Email
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
                    {seller_email}
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
                      Seller Name
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
                    {seller_name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
