// src/reducers/birdReducer.js
const initialState = {
    birds: [],
  };
  
  const birdReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_LIKES':
        const updatedBirds = state.birds.map((bird) =>
          bird.name === action.payload ? { ...bird, likes: bird.likes + 1 } : bird
        );
        return { ...state, birds: updatedBirds };
  
      case 'ADD_BIRD':
        const { birdName, likes } = action.payload;
        const newBird = { name: birdName, likes };
        return { ...state, birds: [...state.birds, newBird] };
  
      default:
        return state;
    }
  };
  
  export default birdReducer;
  