import { createBrowserRouter, Navigate } from 'react-router-dom';
import Order from '../pages/Order/Order';
import Success from '../pages/Success/Success';
import Page from '../components/Page/Page';
import Marketplace from '../pages/Marketplace/Marketplace';
import Product from '../pages/Product/Product';
import Recordings from '../pages/Recordings/Recordings';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    children: [
      { path: '/', element: <Marketplace /> },
      { path: '/product/:id', element: <Product /> },
      {
        path: '/order/:productId',
        element: <Order />,
      },
      {
        path: '/order/success',
        element: <Success />,
      },
      { path: '/rrweb/recordings', element: <Recordings /> },
      { path: '/not-found', element: <NotFound /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/not-found' />,
  },
]);

export default router;
