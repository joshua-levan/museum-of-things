import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const CultureProfile = () => {
    const cultureId = Number(useParams().cultureId)
        const culture = things.filter(thing => thing.category === 'culture')
    const artifact:any = culture.find(artifact => artifact.id === cultureId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/culture"><button>↻ Culture</button></Link>
            </div>
    </div>
  )
}

export default CultureProfile