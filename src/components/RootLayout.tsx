import { Outlet } from "react-router";
import { useState } from "react";

import Nav from "./Nav";
import Map from "./Map";
import Footer from './Footer'

import './RootLayout.css'


const RootLayout = () => {
  const [mapOn, setMapOn] = useState(false);
  const toggleMap = (): void => {
    setMapOn((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Nav toggleMap = {toggleMap}/>
      {mapOn && <Map />}

        <main>
            <Outlet />
        </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
