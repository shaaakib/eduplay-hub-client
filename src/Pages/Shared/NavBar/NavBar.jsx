import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <nav className="w-full bg-white mt-4">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <h1>EduPlay-Hub</h1>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/alltoy">All Toys</Link>
              </li>
              {user && (
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/mytoys">My Toys</Link>
                </li>
              )}
              {user && (
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/addToy">Add A Toy</Link>
                </li>
              )}
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/blog">Blog</Link>
              </li>
              {user ? (
                <li className="text-gray-600 hover:text-blue-600">
                  <button
                    onClick={handleLogOut}
                    className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    to="/login"
                  >
                    <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                      LogOut
                    </span>
                  </button>
                </li>
              ) : (
                <li className="text-gray-600 hover:text-blue-600">
                  <Link
                    className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    to="/login"
                  >
                    <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                      Login
                    </span>
                  </Link>
                </li>
              )}
              {user && (
                <li className="text-gray-600 hover:text-blue-600">
                  {user.photoURL ? (
                    <img
                      className="w-14 rounded-full"
                      title={user.displayName}
                      src={user.photoURL}
                      alt="Profile"
                    />
                  ) : (
                    ''
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
