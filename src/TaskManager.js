import React, { useState } from 'react'

export const TaskManager = () => {
    const [newTask, setNew]= useState()
    const [task, setTask]= useState([])
    const [taskId, setTaskId]= useState(null)
    const [editText, setEditText]= useState()


    function addNew(){
        let newObj= {id: task.length+1, text:newTask}
        setTask((prev)=> [...prev, newObj])
        setNew('')
    }

    function handleSave(id){
        setTask((prev)=> 
        prev.map((task)=>
        task.id==id ? {...task, text:editText} : task
        )
        )
        setEditText('')
        setTaskId(null)
    }

    function handleEdit(id){
        setTaskId(id)
    }

    function handleDelete(id){
        setTask((prev)=>
        prev.filter((ite)=>
        ite.id!==id
        )
        )
    }
  return (
    <div>
        <div>
            <input type="text" 
                value={newTask}
                onChange={(e)=> setNew(e.target.value)}
            />
            <button onClick={addNew}>Add Task</button>
        </div>

        <div>
        {task.map((item=>(
            <li key={item.id}>
                {taskId === item.id ? (
                    <>
                        <input type="text" name="" value={editText} onChange={(e)=> setEditText(e.target.value)} />
                        <button onClick={()=> handleSave(item.id)}>Save</button>
                    </>
                ) : (
                    <>
                        <p>{item.text}</p>
                        <button onClick={()=> handleEdit(item.id)}>Edit</button>
                        <button onClick={()=> handleDelete(item.id)}>Delete</button>
                    </>
                )} 
            </li>
        )))}
        </div>
    </div>
  )
}
