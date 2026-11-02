import './Thing.css'

interface ThingProps {
    things: object[];
    index: number;
    changeIndex: () => void
}

const Thing = ({ things, index, changeIndex }: ThingProps) => {

  return (
    <>
        <div className='thing'>
            <img src={things[index].image} alt={things[index].title} draggable="false" />
            <div className="thing__info">
                <h1>{things[index].title}</h1>
                <h2>{things[index].subtitle}</h2>
                <p>{things[index].description}</p>
                <button onClick={changeIndex}>↻ Random Artifact</button>
            </div>
        </div>
    </>
  )
}

export default Thing