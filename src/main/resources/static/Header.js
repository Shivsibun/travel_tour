import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">TRAVEL MANAGEMENT</div>
                <ul className="nav-links">
                    <li><Link to="/#packages">Packages</Link></li>
                    <li><Link to="/#testimonials">Testimonials</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="hero">
                <h1>Explore the World with Us</h1>
                <p>Your adventure starts here. Discover amazing travel packages.</p>
                <Link to="/#packages" className="btn">View Packages</Link>
            </div>
        </header>
    );
}

export default Header;