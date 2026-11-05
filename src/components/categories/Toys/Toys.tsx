import { Link } from "react-router"
import { things } from "../../../data/data"

const Toys = () => {
    const toys = things.filter(thing => thing.category === 'toys')

    return (
        <section>
            {toys.map(toy => (
                <Link className="link" key={`${toy.category}${toy.id}`} to={`/toys/${toy.id}`}><img
                    src={toy.image}
                    alt={toy.title}
                /></Link>
            ))}
        </section>
    )
}

export default Toys