import { useState } from 'react'
import { things } from '../data/data'
import './Thing.css'

const Thing = () => {
    const randomIndex = Math.floor(Math.random()* things.length)
    const [index, setIndex] = useState(randomIndex)

    const changeIndex = () => {
        setIndex(Math.floor(Math.random()* things.length))
    }

  return (
    <>
        <div className='thing'>
            <img src={things[index].image} alt="" />
            <div className="thing__info">
                <h1>{things[index].title}</h1>
                <h2>{things[index].subtitle}</h2>
                <p>{things[index].description}</p>
            </div>
        </div>
        <button onClick={changeIndex}>↻ Random Artifact</button>
    </>
  )
}

export default Thing