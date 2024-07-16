import Course from './Course';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Courses({ courses, removeCourse }) {
    const [index, setIndex] = useState(0);
    const { content, title, price } = courses[index];

    console.log(index);

    const checkIndex = (index) => {
        // debugger;
        if (index < 0) {
            return courses.length - 1;
        }
        if (index > courses.length - 1) {
            return 0;
        }
        return index;
    };

    const getRandomCourse = () => {
        let randomNumber = Math.floor(Math.random() * courses.length);

        if (randomNumber === index) {
            randomNumber = index + 1;
        }

        setIndex(checkIndex(randomNumber));
    };

    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    };
    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    };

    return (
        <div className="courseMainDiv">
            <div className="courseTitleAndButton">
                <h2>Kurslarım</h2>
                <button className="cardDeleteBtn" onClick={getRandomCourse}>
                    Rastgele Kurs Ata!
                </button>
            </div>
            <div className="cardDiv">
                <button className="prevNextBtn" onClick={prevCourse}>
                    <FaChevronLeft />
                </button>
                <div className="card">
                    <div className="cardTitlePrice">
                        <h2 className="cardTitle">{title}</h2>
                        <h4 className="cardPrice">{price}TL</h4>
                    </div>
                    <p>{content}</p>
                </div>
                <button className="prevNextBtn" onClick={nextCourse}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired
};

export default Courses;
