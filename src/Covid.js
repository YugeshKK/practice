import React, { useState } from 'react'
import { useEffect } from 'react'


export const Covid = () => {
    const [res, setRes]= useState()
    const [count, setCount]= useState('india')

    useEffect(() => {
        fetch(`http://disease.sh/v3/covid-19/countries/${count}`)
        .then((response)=> response.json())
        .then((data)=> setRes(data))
        .then(console.log(res))
        .catch((err)=> console.log(err))
    }, [])
    
    function handleClick(){
        fetch(`http://disease.sh/v3/covid-19/countries/${count}`)
        .then((res)=> res.json())
        .then((data)=> setRes(data))
        .then(console.log(res))
    }

  return (
    <div>
    <input type="text" 
        onChange={(e)=> setCount(e.target.value)}
    />
    <button 
    onClick={handleClick}>search</button>

    <div>
        <p>{res.country}</p>
        <p>{res.cases}</p>
    </div>
    </div>
  )
}
