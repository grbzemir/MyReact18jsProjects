import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ image, name, content, price }) => {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1 style={{ marginBottom: '10px' }}>{name}</h1>
            <h6 style={{ marginTop: '0px' }}>{content}</h6>
            <p>
                <i style={{ color: 'red' }}>{price} TL</i>
            </p>
        </div>
    );
};

MenuItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default MenuItem; // Varsayılan ihracat
