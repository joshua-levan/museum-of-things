import { useState } from 'react'

import Footer from './components/Footer'
import Thing from './components/Thing'
import './App.css'
import Nav from './components/Nav'
import Map from './components/Map'

const App = () => {
  const [mapOn, setMapOn] = useState(true)
  const toggleMap = ():void => {
    setMapOn(prev => !prev)
  }

  return (
    <div className='app-container'>
      <Nav toggleMap = {toggleMap}/>
      <Thing />
      {mapOn && <Map />}
      <Footer />
    </div>
  )
}

export default App