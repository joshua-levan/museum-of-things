import { useState } from 'react'
import { things } from './data/data'

import Thing from './components/Thing'
import './App.css'

const App = () => {
  const randomIndex = Math.floor(Math.random()* things.length)
  const [index, setIndex] = useState(randomIndex)

  const changeIndex = () => {
      setIndex(Math.floor(Math.random()* things.length))
  }

  return (
    <div className='app-container'>
      <Thing things={things} index={index} changeIndex={changeIndex}/>
    </div>
  )
}

export default App