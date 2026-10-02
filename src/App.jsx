import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { text: task, done: false }])
      setTask('')
    }
  }

  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index))
  }

  const toggleTask = (index) => {
    const updatedTaskList = taskList.map((item, i) => {
      if (i === index) {
        return { ...item, done: !item.done }
      }

      return item
    })

    setTaskList(updatedTaskList)
  }

  return (
    <div>
      <nav className='navbar'>
        <h2>TODOLIST</h2>
      </nav>

      <div>
        <input
          type='text'
          placeholder='Enter your task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>ADD</button>
      </div>

      <ul>
        {taskList.map((taskItem, index) => (
          <li
            key={index}
            style={{
              backgroundColor: taskItem.done ? 'green' : 'red'
            }}
          >
            <span>{taskItem.text}</span>

            <button onClick={() => toggleTask(index)}>
              {taskItem.done ? 'UNDO' : 'DONE'}
            </button>

            <button onClick={() => deleteTask(index)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App