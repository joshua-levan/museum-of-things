import { Link } from "react-router"
import { things } from "../../../data/data"

const Everyday = () => {
    const everyday = things.filter(thing => thing.category === 'everyday')

    return (
        <section>
            {everyday.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/everyday/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Everyday