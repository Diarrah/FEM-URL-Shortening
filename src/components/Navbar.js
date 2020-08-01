import React from 'react';
import companyLogo from '../images/logo.svg'

const Navbar = () => {
    const links = ['Features', 'Pricing', 'Resources'];

    const modalOpen = (e) => {
        let { body } = document;

        e.target.parentElement.classList.toggle('deployed');
        e.target.parentElement.classList.contains('deployed') 
            ? body.style.overflowY = 'hidden' 
            : body.style.overflowY = 'visible';
    }

    return (
        <div className="navbar">
            <img src={companyLogo} className="logo logo--main" alt="Company logo" />
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

            <a href="#" className="navbar--mobile" onClick={modalOpen}>
                <i className="fa fa-bars hamburger" aria-hidden="true" />
                <i className="fa fa-times close" aria-hidden="true" />
            </a>
        </div>
    )
}

export default Navbar;