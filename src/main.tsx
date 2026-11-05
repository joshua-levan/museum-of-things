import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import NotFoundPage from './components/NotFoundPage.tsx';
import RootLayout from './components/RootLayout.tsx';

import Toys from './components/categories/Toys/Toys.tsx';

import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/toys",
        element: <Toys />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
