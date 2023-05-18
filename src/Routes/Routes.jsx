import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import AddToy from '../Pages/AddToy/AddToy';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoutes from './PrivateRoutes';
import UpdateToy from '../Pages/UpdateToy/UpdateToy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
          fetch(`http://localhost:5000/toys/${params.id}`),
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
    ],
  },
]);

export default router;
