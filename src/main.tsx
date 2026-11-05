import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import RootLayout from './components/RootLayout.tsx';

import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
