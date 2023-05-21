import React from 'react';
import { Link } from 'react-router-dom';

export default function LatestBlog() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">
        Read Our Latest Articles
      </h1>
      <p className="text-xl text-center my-5 font-bold">
        More Articles?{' '}
        <Link className="text-yellow-400" to="/blog">
          Visits our Blog
        </Link>
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            data-aos="zoom-in"
            alt="Office"
            src="https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417_1280.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2023-2-10" className="block text-xs text-gray-500">
              10th Feb 2023
            </time>

            <div>
              <h3 className="mt-0.5 text-lg text-gray-900">
                Baby Planet's toys makes learning so easy
              </h3>
            </div>
          </div>
          <button className="inline-block rounded bg-indigo-600 px-8 py-3 my-4 mx-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
            <Link to="/blog">Read More</Link>
          </button>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            data-aos="zoom-in"
            alt="Office"
            src="https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459_960_720.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2023-3-10" className="block text-xs text-gray-500">
              10th Mar 2023
            </time>

            <div>
              <h3 className="mt-0.5 text-lg text-gray-900">
                Mother revolves around her children
              </h3>
            </div>
          </div>
          <button className="inline-block rounded bg-indigo-600 px-8 py-3 my-4 mx-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
            <Link to="/blog">Read More</Link>
          </button>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            data-aos="zoom-in"
            alt="Office"
            src="https://cdn.pixabay.com/photo/2017/06/23/18/50/thomas-and-friends-2435542_960_720.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="bg-white p-4 sm:p-6">
            <time dateTime="2023-4-10" className="block text-xs text-gray-500">
              10th Apr 2023
            </time>

            <div>
              <h3 className="mt-0.5 text-lg text-gray-900">
                Learn while you grow toys Baby Planet
              </h3>
            </div>
          </div>
          <button className="inline-block rounded bg-indigo-600 px-8 py-3 my-4 mx-4 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
            <Link to="/blog">Read More</Link>
          </button>
        </article>
      </div>
    </div>
  );
}
