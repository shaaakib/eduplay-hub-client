import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

export default function MyToys() {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle('MyToy');

  const url = `https://eduplay-hub-server.vercel.app/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://eduplay-hub-server.vercel.app/toys/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <section className="relative bg-[url(https://img.freepik.com/free-vector/flat-design-background-christmas-toys_23-2148355805.jpg?w=996&t=st=1684649182~exp=1684649782~hmac=187d552feae92f4003726cb51762c695520c10632baefbd482bd0624b61032e5)] bg-cover bg-center bg-no-repeat rounded-lg">
          <div className="absolute inset-0 bg-white/40 sm:bg-white/40 md:bg-white/40  sm:from-white/75 md:from-white/75 sm:to-white/95 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative px-4 py-32 sm:px-6 ">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-5xl text-center">
                Your Toys: {myToys.length}
              </h2>

              <div className="mt-8 flex  gap-4 text-center justify-center"></div>
            </div>
          </div>
        </section>
      </div>

      {/* table  */}

      <div className="overflow-x-auto">
        <div className="flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full ">
            <div className="bg-white max-w-full overflow-x-auto shadow-md rounded my-6">
              <table className="min-w-full w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Picture</th>
                    <th className="py-3 px-6 text-left">Category</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {myToys.map((myToy) => (
                    <MyToysRow
                      key={myToy._id}
                      handleDelete={handleDelete}
                      myToy={myToy}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
