import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const BugsProfile = () => {
    const bugsId = Number(useParams().bugsId)
        const bugs = things.filter(thing => thing.category === 'bugs')
    const artifact:any = bugs.find(artifact => artifact.id === bugsId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/bugs"><button>↻ Bugs</button></Link>
            </div>
    </div>
  )
}

export default BugsProfile