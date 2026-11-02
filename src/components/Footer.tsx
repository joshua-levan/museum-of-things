import './Footer.css'
import logo from '../images/logotype.svg'

interface Things {
    category: string;
    id: number;
    image: string;
    title: string;
    subtitle: string | null;
    description: string;
}

interface FooterProps {
    things: Things[];
    index: number
}

const Footer = ({ things, index }:FooterProps) => {
  return (
    <footer>
        <img src={logo} alt="" />
        <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer