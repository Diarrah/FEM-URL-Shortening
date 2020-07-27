import React from 'react';
import MainImage from '../images/illustration-working.svg';
import Button from './Button'

const Header = () => (
    <div className="header">
        <div className="header__textbox">
            <h1 className="main__heading">More than just shorter links</h1>
            <p className="subheading">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <Button />
        </div>
        <div className="header__image__container">
            <img src={MainImage} className="hero-image" alt="Tech person working illustraion" />
        </div>
    </div>
)

export default Header;