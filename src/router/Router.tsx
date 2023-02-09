import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from '../pages/error/Error';
import { ItemDetails } from '../pages/itemDetails/ItemDetails';
import { Root } from '../pages/root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'item/:id',
        element: <ItemDetails />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
