import { Link } from 'react-router'

import map from '../images/map.svg'
import './Map.css'

type MapProps = {
  toggleMap: () => void
}

const Map = ({ toggleMap }:MapProps) => {
  return (
    <div className="map-modal">
        <div className='map-container'>
            <Link to="/toys" onClick={toggleMap} className="toys category-section">Toys</Link>
            <Link to="/industrial" onClick={toggleMap} className="industrial category-section">Industrial Design</Link>
            <Link to="/culture" onClick={toggleMap} className="culture category-section">Culture</Link>
            <div onClick={toggleMap} className="tools category-section">Tools</div>
            <div onClick={toggleMap} className="art category-section">Art</div>
            <div onClick={toggleMap} className="everyday category-section">Everyday</div>
            <div onClick={toggleMap} className="bugs category-section">Bugs!</div>
            <Link to="/" onClick={toggleMap} className="lobby category-section">Lobby</Link>
            <div onClick={toggleMap} className="nature category-section">Nature</div>
            <img src={map} alt="museum map" draggable="false"/>
        </div>
    </div>
  )
}

export default Map