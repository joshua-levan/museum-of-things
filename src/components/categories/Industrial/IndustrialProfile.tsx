import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const IndustrialProfile = () => {
    const industrialId = Number(useParams().industrialId)
        const industrial = things.filter(thing => thing.category === 'industrial')
    const artifact:any = industrial.find(artifact => artifact.id === industrialId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/industrial"><button>↻ industrial Design</button></Link>
            </div>
    </div>
  )
}

export default IndustrialProfile