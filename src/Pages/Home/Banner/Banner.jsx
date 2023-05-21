import React from 'react';
import homeBg from '../../../assets/home-bg.png';
// import homeBg from '../../../assets/home-bg-2.png';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="mt-16">
      <section className="relative bg-[url(https://img.freepik.com/free-photo/top-view-childhood-cancer-awareness-month-background-concepttoys_23-2149499365.jpg?w=996&t=st=1684639859~exp=1684640459~hmac=9b98896d231f02518ee5879880391239dc1190bbb57b1046e63ec9b8937661e2)] bg-cover bg-center bg-no-repeat rounded-lg">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 relative">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div data-aos="fade-up" data-aos-duration="2000">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                A New Box of Toys Every Month
              </h1>

              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                We deliver boxes of fantastic, hand-picked, <br /> age
                appropriate toy, books and puzzles, straight to your door.
              </p>
            </div>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm  text-center text-black font-bold border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Browse Toys
              </Link>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="w-96 h-[28rem] absolute bottom-0 "
              src={homeBg}
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
