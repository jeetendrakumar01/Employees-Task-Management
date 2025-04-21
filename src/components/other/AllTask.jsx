import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData] =  useContext(AuthContext)

   
  return (
    <div className='bg-gray-50 p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 text-black'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 text-black'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 text-black'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 text-black'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 text-black'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5 text-black'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-black'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask
