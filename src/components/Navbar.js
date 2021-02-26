import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <li><Link to="/welcome">Home </Link></li>
            <li><Link to="/todos">Todos </Link></li>
            <li><Link to="/timer">Timer </Link></li>
            <li><Link to="/events">Events </Link></li>
        </nav>
     );
}
 
export default Navbar;