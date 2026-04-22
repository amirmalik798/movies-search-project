import { Link } from 'react-router-dom';
import "../css/NavBar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
                <h4>Developed by: Amir Malik</h4>
                <h5>Uses TMDB API</h5>
            </div>
            <div className="navbar-link">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;