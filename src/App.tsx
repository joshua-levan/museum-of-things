import { useState } from 'react'
import { things } from './data/data'


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

  const randomIndex = Math.floor(Math.random()* things.length)
  const [index, setIndex] = useState(randomIndex)

  const changeIndex = () => {
      setIndex(Math.floor(Math.random()* things.length))
  }

  return (
    <div className='app-container'>
      <Nav toggleMap = {toggleMap}/>
      <Thing things={things} index={index} changeIndex={changeIndex}/>
      {mapOn && <Map />}
      <Footer things={things} index={index}/>
    </div>
  )
}

export default App