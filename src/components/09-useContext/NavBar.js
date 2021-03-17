import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useConext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link" aria-current="page">Home</NavLink>
                    <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Login</NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-item nav-link">About</NavLink>
                </div>
            </div>
        </nav>
    )
}
