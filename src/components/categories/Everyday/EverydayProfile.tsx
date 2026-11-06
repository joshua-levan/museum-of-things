import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const EverydayProfile = () => {
    const everydayId = Number(useParams().everydayId)
        const everyday = things.filter(thing => thing.category === 'everyday')
    const artifact:any = everyday.find(artifact => artifact.id === everydayId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/everyday"><button>↻ Everyday</button></Link>
            </div>
    </div>
  )
}

export default EverydayProfile