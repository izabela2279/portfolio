import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <h1>
      <Link to="/">Izabela Szeremeta</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="Resume">Resume</Link>
        </li>
        <li>
          <Link to="Projects">Projects</Link>
        </li>
      </ul> 
    </nav>
  )
}

export default NavBar