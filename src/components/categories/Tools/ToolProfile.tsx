import { useParams, Link } from "react-router"
import { things } from "../../../data/data"

const ToolProfile = () => {
    const toolId = Number(useParams().toolId)
        const tools = things.filter(thing => thing.category === 'tools')
    const artifact:any = tools.find(artifact => artifact.id === toolId)

  return (
    <div className="thing">
        <img src={artifact.image} alt={artifact.title} draggable="false"/>
        <div className="thing__info">
                <h1>{artifact.title}</h1>
                <h2>{artifact.subtitle}</h2>
                <p>{artifact.description}</p>
                <Link to="/tools"><button>↻ Tools</button></Link>
            </div>
    </div>
  )
}

export default ToolProfile