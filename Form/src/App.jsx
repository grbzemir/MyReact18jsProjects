import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCreate from './Components/TaskCreate'
import TaskList from './Components/TaskList'

function App() {

  const createTask = (title, taskDesc) => {
    console.log(title, taskDesc);
    onCreate(title, taskDesc);
  }

  return (

    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevlerim</h1>
      <TaskList />
    </div>
  )
}

export default App
