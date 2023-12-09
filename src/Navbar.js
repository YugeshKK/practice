import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate= useNavigate()

  return (
    <div>
        <nav>
            <ul>
            <button onClick={()=> navigate('/home')}>Append</button>
            <button onClick={()=> navigate('/')}>PhoneBook</button>
            <button onClick={()=> navigate('/task')}>Task Manager</button>
            <button onClick={()=> navigate('/sort')}>Sorting</button>
            <button onClick={()=> navigate('/covid')}>Covid</button>
            <button onClick={()=> navigate('/bird')}>BirdList</button>
            </ul>
        </nav>
    </div>
  )
}
