// src/components/BirdList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLikes, addBird } from './redux/actions';

export  const BirdList = () => {
  const dispatch = useDispatch();
  const birds = useSelector((state) => state.birds);

  const [newBirdName, setNewBirdName] = useState('');

  const handleAddBird = () => {
    if (newBirdName.trim() !== '') {
      dispatch(addBird(newBirdName));
      setNewBirdName(''); 
    }
  };

  return (
    <div>
      <h1>Bird List</h1>

      {/* Input and button for adding new birds */}
      <div>
        <input
          type="text"
          placeholder="Enter new bird name"
          value={newBirdName}
          onChange={(e) => setNewBirdName(e.target.value)}
        />
        <button onClick={handleAddBird}>Add Bird</button>
      </div>

      {/* Bird list */}
      <ul>
        {birds ? birds.birds.map((bird) => (
          <li key={bird.name}>
            {bird.name} - Likes: {bird.likes}
            <button onClick={() => dispatch(incrementLikes(bird.name))}>Like</button>
          </li>
        )): "Loading"}
      </ul>
    </div>
  );
};


