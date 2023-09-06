import React from 'react'
const Tasks = ({title,discription,deleteTask,index}) => {
  return (
    <div className='Task'>
        <div>
            <p>{title}</p>
            <span>{discription}</span>
        </div>
        <button onClick={() =>deleteTask(index)}>-</button>
    </div>
  )
}

export default Tasks;