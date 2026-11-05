import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const ToyProfile = () => {
    const toyId = Number(useParams().toyId)
    const toys = things.filter(thing => thing.category === 'toys')
    const toy:any = toys.find(toy => toy.id === toyId)

  return (
    <div className="thing">
        <img src={toy.image} alt={toy.title} draggable="false"/>
        <div className="thing__info">
                <h1>{toy.title}</h1>
                <h2>{toy.subtitle}</h2>
                <p>{toy.description}</p>
                <Link to="/toys"><button>↻ Toys</button></Link>
            </div>
    </div>
  )
}

export default ToyProfile