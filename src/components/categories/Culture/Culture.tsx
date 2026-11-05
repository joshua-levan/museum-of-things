import { Link } from "react-router"
import { things } from "../../../data/data"

const Culture = () => {
    const culture = things.filter(thing => thing.category === 'culture')

    return (
        <section>
            {culture.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/culture/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Culture