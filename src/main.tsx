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

import Art from './components/categories/Art/Art.tsx';
import ArtProfile from './components/categories/Art/ArtProfile.tsx';

import Everyday from './components/categories/Everyday/Everyday.tsx';
import EverydayProfile from './components/categories/Everyday/EverydayProfile.tsx';

import Nature from './components/categories/Nature/Nature.tsx';
import NatureProfile from './components/categories/Nature/NatureProfile.tsx';

import Bugs from './components/categories/Bugs/Bugs.tsx';
import BugsProfile from './components/categories/Bugs/BugsProfile.tsx';

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
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/art/:artId",
        element: <ArtProfile />,
      },
      {
        path: "/everyday",
        element: <Everyday />,
      },
      {
        path: "/everyday/:everydayId",
        element: <EverydayProfile />,
      },
      {
        path: "/nature",
        element: <Nature />,
      },
      {
        path: "/nature/:natureId",
        element: <NatureProfile />,
      },
      {
        path: "/bugs",
        element: <Bugs />,
      },
      {
        path: "/bugs/:bugsId",
        element: <BugsProfile />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
