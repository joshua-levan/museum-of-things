import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <div>
        <p>404 Not Found</p>
        <Link to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage