import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course'; // Assuming Course component is imported

function Courses({ courses, removeCourse }) {
    //   console.log(courses);
    return (
        <div>
            <div>
                <h2>Kurslarım</h2>
            </div>
            <div className="">
                {courses.map((course) => {
                    return (
                        <Course
                            key={course.id}
                            {...course}
                            removeOneCourse={removeCourse}
                        />
                    );
                    //   course={course}
                })}
            </div>
        </div>
    );
}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired
};

export default Courses;
