import React, { useState } from 'react';
import Course from './Course';
import './App.css';

function App() {
  function getRandomCourse() {
    const courseArray = ['Angular', 'Bootstrap', 'C#', 'KompleWeb'];
    return courseArray[Math.floor(Math.random() * courseArray.length)];
  }

  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
    // javascript spread özelliiği kullanıldı
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>Kurs Ekle</button>
      {/* courseList değişkenini burada ekranda gösteriyoruz */}
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
