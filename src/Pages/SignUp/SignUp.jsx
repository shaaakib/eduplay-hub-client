import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { createUser, auth, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle('SignUp');

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // if (password ) {
    //   setError('Password must be 6 characters or longer');
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        logOut();
        navigate('/login');

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser(result.user);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.code);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome to EduPlay-Hub
          </h1>

          <form
            onSubmit={handleSignUp}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign Up to your account
            </p>

            <div>
              <label className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  className="w-full border-2 mb-5 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Name"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="photo"
                  className="w-full border-2 mb-2 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Photo URL"
                />
              </div>
            </div>
            <div>
              <label className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="w-full border-2 mb-2 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="sr-only">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="w-full border-2 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                {showPassword ? (
                  <FaEye
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="h-6 w-6 absolute top-2.5 right-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
            <p>{error}</p>

            <div>
              <input
                className="block w-full cursor-pointer rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <Link className="underline" to="/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
