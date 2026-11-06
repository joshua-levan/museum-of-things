import { Link } from "react-router"
import { things } from "../../../data/data"

const Bugs = () => {
    const bugs = things.filter(thing => thing.category === 'bugs')

    return (
        <section className="bugs">
            {bugs.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/bugs/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Bugs