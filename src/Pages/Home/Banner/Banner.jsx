import React from 'react';

export default function Banner() {
  return (
    <div>
      <section className="relative bg-[url(https://images.pexels.com/photos/3769139/pexels-photo-3769139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat rounded-lg">
        <div className="absolute inset-0 bg-white/40 sm:bg-white/40 md:bg-white/40  sm:from-white/75 md:from-white/75 sm:to-white/95 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative px-4 py-32 sm:px-6 ">
          <div className=" text-center ">
            <p className="mt-4 text-4xl font-bold text-black">
              I grow by helping people in need.
            </p>

            <div className="mt-8 flex  gap-4 text-center justify-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem{' '}
                <br />
                expedita, veniam reiciendis quod velit reprehenderit! Soluta
                pariatur unde perferendis corporis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
