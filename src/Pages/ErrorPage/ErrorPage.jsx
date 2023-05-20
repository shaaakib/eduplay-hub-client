import React from 'react';
import Lottie from 'lottie-react';
import errorAni from '../../assets/error.json';
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const { error, status } = useRouteError();

  return (
    <>
      <div className="flex items-center justify-center  ">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <div className="w-96 ">
                <Lottie animationData={errorAni} loop={true} />
              </div>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page{' '}
                {error?.message}
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link
                to="/"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Go Home
                </span>
                <span className="relative invisible">Go Home</span>
              </Link>
            </div>
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
