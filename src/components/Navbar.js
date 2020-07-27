import React from 'react';
import Logo from '../images/logo.svg'

const Navbar = () => {
    const links = ['Features', 'Pricing', 'Resources'];

    return (
        <div className="navbar">
            <img src={Logo} className="logo--main" alt="Company logo" />
            <ul className="navbar__links navbar__links--main">  
                {links.map((link, i) => (
                    <li className="navbar__link" key={i}>
                        <a href="#">{ link }</a>
                    </li>
                ))}
            </ul>
            
            <ul className="navbar__links navbar__links--secondary">
                <li className="navbar__link">
                    <a href="#">Login</a>
                </li>
                <li className="navbar__link navbar__link--highlight">
                    <a href="#">Sign Up</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;