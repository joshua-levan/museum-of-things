import { Link } from "react-router"
import { things } from "../../../data/data"

const Industrial = () => {
    const industrial = things.filter(thing => thing.category === 'industrial')

    return (
        <section>
            {industrial.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/industrial/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Industrial