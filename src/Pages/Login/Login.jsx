import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hooks/useTitle';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Sign In');
  console.log('login page', location);
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <button
            onClick={handleGoogleSignIn}
            className="bg-gray-200 mt-5 flex justify-center items-center rounded-xl gap-3 w-full py-2"
          >
            <p>Continue with Google</p>
            <svg
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_11)">
                <path
                  d="M30.9999 16.2334C30.9999 15.1547 30.9128 14.0702 30.7268 13.0089H15.8108V19.1198H24.3525C23.9981 21.0907 22.8592 22.8341 21.1915 23.942V27.9071H26.2875C29.28 25.1432 30.9999 21.0615 30.9999 16.2334Z"
                  fill="#4285F4"
                />
                <path
                  d="M15.811 31.738C20.076 31.738 23.6728 30.3328 26.2934 27.9071L21.1975 23.942C19.7797 24.9099 17.9493 25.4581 15.8168 25.4581C11.6912 25.4581 8.19316 22.665 6.93805 18.9099H1.67938V22.9974C4.36392 28.3561 9.83177 31.738 15.811 31.738Z"
                  fill="#34A853"
                />
                <path
                  d="M6.93224 18.9099C6.26983 16.9391 6.26983 14.8049 6.93224 12.834V8.74652H1.67939C-0.563539 13.2306 -0.563539 18.5134 1.67939 22.9975L6.93224 18.9099Z"
                  fill="#FBBC04"
                />
                <path
                  d="M15.811 6.28001C18.0655 6.24503 20.2445 7.09635 21.8773 8.65906L26.3922 4.12838C23.5334 1.43446 19.739 -0.0466162 15.811 3.17992e-05C9.83177 3.17992e-05 4.36392 3.38201 1.67938 8.74652L6.93224 12.8341C8.18154 9.07306 11.6854 6.28001 15.811 6.28001Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_11">
                  <rect width="31" height="31.7381" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <p className="text-center mt-3">Or</p>
          <form
            onSubmit={handleLogin}
            className="mb-0  space-y-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>
            <div></div>
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
            <input
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              type="submit"
              value="Sign In"
            />
            <p className="text-center text-sm text-gray-500">
              No account?
              <Link className="underline" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
