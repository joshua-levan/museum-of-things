import icon from '../images/icon.svg'
import './Nav.css'

type NavProps = {
  toggleMap: () => void
}

const Nav = ({ toggleMap }:NavProps) => {
  return (
    <img onClick={toggleMap} className="map-icon" src={icon} alt="map icon" aria-labelledby='open map' draggable="false"/>
  )
}

export default Nav