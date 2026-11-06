import { Link } from "react-router"
import { things } from "../../../data/data"

const Tools = () => {
    const tools = things.filter(thing => thing.category === 'tools')

    return (
        <section>
            {tools.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/tools/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Tools