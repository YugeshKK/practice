
// export const INCREMENT='INCREMENT';
// export const DECREMENT= 'DECREMENT';
// export const RESET= 'RESET';



// export const increment = (payload=1) => {
//       return({
//         type: INCREMENT,
//         payload: payload
//       })
// }

// export const decrement = (payload=1) => {
//     return({
//         type: DECREMENT,
//         payload: payload
//     })
// }

// export const reset = () => {
//     return({
//         type: RESET
//     })
// }

export const incrementLikes = (birdName) => {
    return {
      type: 'INCREMENT_LIKES',
      payload: birdName,
    };
  };
  
  export const addBird = (birdName) => {
    return {
      type: 'ADD_BIRD',
      payload: { birdName, likes: 0 },
    };
  };
  // src/reducers/birdReducer.js