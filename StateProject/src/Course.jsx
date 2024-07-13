import React from 'react';
import PropTypes from 'prop-types';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import CSharp from './images/ccsharp.png'; // Değişiklik yapıldı: ccsharp -> CSharp
import KompleWeb from './images/kompleweb.jpg';
import './Course.css';

const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    CSharp: CSharp,
    KompleWeb: KompleWeb
};


function Course({ courseName }) {
    console.log(courseMap[courseName]);
    return (
        <div className='courseDiv'>
            <img className="course" src={courseMap[courseName]} alt={courseName} />
        </div>
    );
}

Course.propTypes = {
    courseName: PropTypes.string.isRequired
};

export default Course;
