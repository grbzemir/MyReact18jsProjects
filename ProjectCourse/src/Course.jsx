import React from 'react';
import PropTypes from 'prop-types';

function Course({ id, content, title, price, removeOneCourse }) {
    return (
        <div>
            <div className="cardTitlePrice">
                <h2 className="cardTitle">{title}</h2>
                <h4 className="cardPrice">{price}TL</h4>
            </div>
            <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
                Sil
            </button>
        </div>
    );
}


Course.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    removeOneCourse: PropTypes.func.isRequired
};

export default Course;