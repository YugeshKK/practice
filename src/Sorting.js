import { useState } from 'react';

export const  Sorting =()=> {


    const APIURL ="https://jsonplaceholder.typicode.com/users";

    const [users, setusers]=useState([])
    const [sortOrder, setsortOrder]= useState(0);
    
    function getUsers(){
        return(
            fetch(APIURL)
            .then((response)=> response.json())
            .then((data)=> setusers(data))
        )
    }

    function sortList(){
        if(sortOrder==0 || sortOrder==2){
            setusers([...users].sort((a,b)=> a.name.length- b.name.length))
            setsortOrder(1)
        }else{
            setusers([...users].sort((a, b)=> b.name.length - a.name.length))
            setsortOrder(2)
        }
    }

return (
<div className="App">
    <h1>User List</h1>
    <div>
    <button onClick = {getUsers}>Get users</button>
    <button onClick = {sortList}>Sort List </button>
    </div>
    <ul>
    {users.map((user) => (
    <li key={user.id}>{user.name}</li>
    ))}{" "}
    </ul>
</div>
);
}
