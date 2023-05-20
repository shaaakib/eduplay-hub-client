import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

export default function UpdateToy() {
  const [category, setCategory] = useState('');
  const toys = useLoaderData();
  const { _id, toy_name, picture, price, quantity } = toys;
  const { user } = useContext(AuthContext);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const picture = form.picture.value;
    const toy_name = form.toy_name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      picture,
      toy_name,
      seller_name,
      seller_email,
      price,
      rating,
      quantity,
      description,
      category,
    };
    console.log(updatedToy);

    fetch(`https://eduplay-hub-server.vercel.app/toys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Data Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        }
      });
  };

  const handleChangeSelect = (event) => {
    const selectValue = event.target.value;
    setCategory(selectValue);
  };
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8">
            <div className="rounded-lg  p-8 shadow-l lg:p-12">
              <form onSubmit={handleUpdateToy} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Picture URL
                    </label>
                    <input
                      className="w-full border-2 rounded-lg  p-3 text-sm"
                      placeholder="Picture URL"
                      defaultValue={picture}
                      name="picture"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Toy Name
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                      placeholder="Toy Name"
                      defaultValue={toy_name}
                      name="toy_name"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Seller Name
                    </label>
                    <input
                      className="w-full border-2 rounded-lg  p-3 text-sm"
                      placeholder="Seller Name"
                      defaultValue={user?.displayName}
                      type="text"
                      name="seller_name"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Seller Email
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                      placeholder="Seller Email"
                      defaultValue={user?.email}
                      type="email"
                      name="seller_email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Select an option
                    </label>
                    <select
                      name="select"
                      onChange={handleChangeSelect}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>Choose a Category</option>
                      <option value="math toys">Math Toys</option>
                      <option value="language toys">Language Toys</option>
                      <option value="science toys">Science Toys</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Price
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                      placeholder="Price"
                      defaultValue={price}
                      type="number"
                      name="price"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Rating
                    </label>
                    <input
                      className="w-full border-2 rounded-lg  p-3 text-sm"
                      placeholder="Rating"
                      name="rating"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Available quantity
                    </label>
                    <input
                      className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                      placeholder="Available quantity"
                      defaultValue={quantity}
                      type="number"
                      name="quantity"
                    />
                  </div>
                </div>

                {/* message */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Detail description
                  </label>

                  <textarea
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                    placeholder="description..."
                    name="description"
                    rows="8"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white "
                  >
                    Update Toy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
