import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import AddToy from '../Pages/AddToy/AddToy';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoutes from './PrivateRoutes';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';
import AllToys from '../Pages/AllToys/AllToys';

import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import SingleToy from '../Pages/SingleToy/SingleToy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'addtoy',
        element: <AddToy />,
      },
      {
        path: 'updatetoy/:id',
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://eduplay-hub-server.vercel.app/toys/${params.id}`),
      },
      {
        path: 'mytoys',
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'alltoy',
        element: <AllToys />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'singletoy/:id',
        element: (
          <PrivateRoutes>
            <SingleToy />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://eduplay-hub-server.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
