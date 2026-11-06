import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const NatureProfile = () => {
    const natureId = Number(useParams().natureId)
        const nature = things.filter(thing => thing.category === 'specimen')
    const artifact:any = nature.find(artifact => artifact.id === natureId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/nature"><button>↻ Nature</button></Link>
            </div>
    </div>
  )
}

export default NatureProfile