import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCreate from './Components/TaskCreate'
import TaskList from './Components/TaskList'

function App() {


  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
      }];
    setTasks(createdTasks);
  };

  return (

    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevlerim</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
