import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bulma/css/bulma.css';
import Course from './Course'
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Angular is a platform and framework for building single-page client applications using HTML and TypeScript."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="C#"
                description="C# is a modern, object-oriented programming language developed by Microsoft to create applications that run on the .NET Framework."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Komple Web Development"
                description="Komple Web Development is a comprehensive course that covers all aspects of web development from front-end to back-end."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
