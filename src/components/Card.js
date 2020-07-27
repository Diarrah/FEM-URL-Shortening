import React from 'react';

const Card = ({ icon, heading, text }) => (
    <div className="card">
        <div className="img__container">
            <img src={icon} className="card__icon" alt="illustration" />
        </div>
        <h3 className="card__heading">{ heading }</h3>
        <p className="card__subheading">{ text }</p>
    </div>
)

export default Card;