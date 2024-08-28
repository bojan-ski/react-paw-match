import { Link, NavLink } from "react-router-dom"
// data
import navigationLinks from "../../../data/navigationLinks"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* home btn - link */}
                <Link to="/" className="fw-bold text-decoration-none text-dark fs-2">
                    Šapo Spoj
                </Link>

                {/* collapse btn */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sapoSpojNavbar" aria-controls="sapoSpojNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* collapse - navigation links */}
                <div className="collapse navbar-collapse" id="sapoSpojNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        {navigationLinks.map(navigationLink => {
                            return <li key={navigationLink.label} className="nav-item me-3">
                                <NavLink to={navigationLink.href} className='nav-link capitalize'>
                                    {navigationLink.label}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar