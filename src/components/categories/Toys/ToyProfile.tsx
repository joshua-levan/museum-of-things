import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const ToyProfile = () => {
    const toyId = Number(useParams().toyId)
    const toys = things.filter(thing => thing.category === 'toys')
    const toy = toys.filter(toy => toy.id === toyId)

  return (
    <div className="thing">
        <img src={toy[0].image} alt={toy[0].title} draggable="false"/>
        <div className="thing__info">
                <h1>{toy[0].title}</h1>
                <h2>{toy[0].subtitle}</h2>
                <p>{toy[0].description}</p>
                <Link to="/toys"><button>↻ Toys</button></Link>
            </div>
    </div>
  )
}

export default ToyProfile