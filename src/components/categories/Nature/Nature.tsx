import { Link } from "react-router"
import { things } from "../../../data/data"

const Nature = () => {
    const nature = things.filter(thing => thing.category === 'specimen')

    return (
        <section>
            {nature.map(artifact => (
                <Link className="link" key={`${artifact.category}${artifact.id}`} to={`/nature/${artifact.id}`}><img
                    src={artifact.image}
                    alt={artifact.title}
                    draggable="false"
                /></Link>
            ))}
        </section>
    )
}

export default Nature