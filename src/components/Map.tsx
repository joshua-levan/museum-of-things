import map from '../images/map.svg'
import './Map.css'

const Map = () => {
  return (
    <div className='map-container'>
        <div className="toys category-section">Toys</div>
        <div className="industrial category-section">Industrial Design</div>
        <div className="culture category-section">Culture</div>
        <div className="tools category-section">Tools</div>
        <div className="art category-section">Art</div>
        <div className="everyday category-section">Everyday</div>
        <div className="bugs category-section">Bugs!</div>
        <div className="lobby category-section">Lobby</div>
        <div className="nature category-section">Nature</div>
        <img src={map} alt="museum map" draggable="false"/>
    </div>
  )
}

export default Map