import React, { useState } from 'react'

export const PhoneBook = () => {

    const [name, setName]= useState()
    const [num, setNum]= useState()
    const [p, setP]= useState([]);


    return (
    <div>
        <div className="input">
            <input type="text" name='number'
            value={num}
            onChange={(e)=> {
                setNum(e.target.value)
            }}
             />
            <input type="text" name='phone'
            value={name}
            onChange={(e)=> {
                setName(e.target.value)
            }}
             />
             <button onClick={()=>{
                 setP([...p, { name:name, num:num}]) 
                 setNum('')
                 setName("")
             }}>Add Contacts</button>
        </div>
        <div>
            {p ? p.map((item=>(
                <li key={item.num}>{item.name} {item.num}</li>
            ))) : ""}
        </div>
    </div>
  )
}
