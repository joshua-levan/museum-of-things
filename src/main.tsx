import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";

import App from './App.tsx'
import NotFoundPage from './components/NotFoundPage.tsx';
import RootLayout from './components/RootLayout.tsx';

import Toys from './components/categories/Toys/Toys.tsx';
import ToyProfile from './components/categories/Toys/ToyProfile.tsx';

import Industrial from './components/categories/Industrial/Industrial.tsx';
import IndustrialProfile  from './components/categories/Industrial/IndustrialProfile.tsx'

import Culture from './components/categories/Culture/Culture.tsx';
import CultureProfile from './components/categories/Culture/CultureProfile.tsx';

import Tools from './components/categories/Tools/Tools.tsx';
import ToolProfile from './components/categories/Tools/ToolProfile.tsx';
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
      },
      {
        path: "/toys/:toyId",
        element: <ToyProfile />,
      },
      {
        path: "/industrial",
        element: <Industrial />,
      },
      {
        path: "/industrial/:industrialId",
        element: <IndustrialProfile />,
      },
      {
        path: "/culture",
        element: <Culture />,
      },
      {
        path: "/culture/:cultureId",
        element: <CultureProfile />,
      },
      {
        path: "/tools",
        element: <Tools />,
      },
      {
        path: "/tools/:toolId",
        element: <ToolProfile />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
