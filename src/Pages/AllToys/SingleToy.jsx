import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function SingleToy() {
  const singleToys = useLoaderData();
  const { toy_name, picture, price, quantity, rating, description } =
    singleToys;
  console.log(toy_name);

  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
              <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                <a className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
                  <img
                    className="h-full rounded-lg w-full"
                    src={picture}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mb-6">
              <h2 className="mt-6 mb-4 text-2xl   font-heading font-medium">
                {toy_name}
              </h2>
              <p className="flex items-center mb-6">
                <span className="mr-2 text-sm text-blue-500 font-medium">
                  $
                </span>
                <span className="text-3xl text-blue-500 font-medium">
                  {price}
                </span>
              </p>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
            <div className="flex mb-6 items-center">
              <span className="text-md text-gray-400">{rating}</span>
            </div>

            <div className="mb-10 flex gap-3">
              <h4 className="mb-3 font-heading font-medium">Qty:</h4>
              <span>{quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
