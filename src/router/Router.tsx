import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from '../pages/error/Error';
import { Root } from '../pages/root/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
