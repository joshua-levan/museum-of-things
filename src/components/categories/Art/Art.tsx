import { Link } from "react-router"
import { things } from "../../../data/data"

const Art = () => {
    const art = things.filter(thing => thing.category === 'art')

    return (
        <section>
            {art.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/art/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Art