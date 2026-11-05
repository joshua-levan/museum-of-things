import { things } from "../../../data/data"

const Toys = () => {
    const toys = things.filter(thing => thing.category === 'toys')

    return (
        <section>
            {toys.map(toy => (
                <img
                    key={`${toy.category}${toy.id}`}
                    src={toy.image}
                    alt={toy.title}
                />
            ))}
        </section>
    )
}

export default Toys