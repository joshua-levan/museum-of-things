import { useState } from 'react'

import Footer from './components/Footer'
import Thing from './components/Thing'
import './App.css'
import Nav from './components/Nav'
import Map from './components/Map'

const App = () => {
  const [mapOn, setMapOn] = useState(true)

  return (
    <div className='app-container'>
      <Nav />
      <Thing />
      {mapOn && <Map />}
      <Footer />
    </div>
  )
}

export default App