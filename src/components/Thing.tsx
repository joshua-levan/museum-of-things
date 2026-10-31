import { things } from '../data/data'
import './Thing.css'

const Thing = () => {
    const randomIndex = Math.floor(Math.random()* things.length)

  return (
    <div className='thing'>
        <img src={things[randomIndex].image} alt="" />
        <div className="thing__info">
            <h1>{things[randomIndex].title}</h1>
            <h2>{things[randomIndex].subtitle}</h2>
            <p>{things[randomIndex].description}</p>
        </div>
    </div>
  )
}

export default Thing