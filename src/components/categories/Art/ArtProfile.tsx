import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const ArtProfile = () => {
    const artId = Number(useParams().artId)
        const art = things.filter(thing => thing.category === 'art')
    const artifact:any = art.find(artifact => artifact.id === artId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/art"><button>↻ Art</button></Link>
            </div>
    </div>
  )
}

export default ArtProfile