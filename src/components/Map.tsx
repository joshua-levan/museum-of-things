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
            <Link to="/tools" onClick={toggleMap} className="tools category-section">Tools</Link>
            <Link to="/art" onClick={toggleMap} className="art category-section">Art</Link>
            <Link to="/everyday" onClick={toggleMap} className="everyday category-section">Everyday</Link>
            <Link to="bugs" onClick={toggleMap} className="bugs-link category-section">Bugs!</Link>
            <Link to="/" onClick={toggleMap} className="lobby category-section">Lobby</Link>
            <Link to="/nature" onClick={toggleMap} className="nature category-section">Nature</Link>
            <img src={map} alt="museum map" draggable="false"/>
        </div>
    </div>
  )
}

export default Map