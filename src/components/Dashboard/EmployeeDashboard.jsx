import React, { useState, useEffect } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (props.data && props.data.tasks) {
      setTasks(props.data.tasks)
    }
  }, [props.data])

  const markTaskCompleted = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, active: false, completed: true } : task
      )
    )
  }

  const markTaskFailed = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, active: false, failed: true } : task
      )
    )
  }

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={{ ...props.data, tasks }} />
      <TaskList data={{ tasks }} onMarkCompleted={markTaskCompleted} onMarkFailed={markTaskFailed} />
    </div>
  )
}

export default EmployeeDashboard
