import './Footer.css'
import logo from '../images/logotype.svg'

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="The Museum of Things Logo" draggable={false} />
        <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer