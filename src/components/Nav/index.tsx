import { NavLink } from "react-router-dom";

import './nav.css'

function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-center">
                    <NavLink className="links-nav" to={'/DB-Games'}>Home</NavLink>
                    <NavLink className="links-nav"  to={'/DB-Games'}>Projetos</NavLink>
                    <NavLink className="links-nav"  to={'/DB-Games'}>Sobre</NavLink>
                    <NavLink className="links-nav"  to={'/DB-Games'}>Contato</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav;