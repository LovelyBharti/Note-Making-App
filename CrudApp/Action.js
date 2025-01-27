// export const ADD_NOTE = 'ADD_NOTE';
// export const REMOVE_NOTE = 'REMOVE_NOTE';
// export const UPDATE_NOTE = 'UPDATE_NOTE';
// export const SEARCH_NOTES = 'SEARCH_NOTES';

// export const addNote = (note) => {
//   return {
//     type: ADD_NOTE,
//     payload: note,
//   };
// };

// export const removeNote = (id) => {
//   return {
//     type: REMOVE_NOTE,
//     payload: id,
//   };
// };

// export const updateNote = (note) => {
//   return {
//     type: UPDATE_NOTE,
//     payload: note,
//   };
// };

// export const searchNotes = (searchQuery) => {
//   return {
//     type: SEARCH_NOTES,
//     payload: searchQuery,
//   };
// };

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SEARCH_NOTES = 'SEARCH_NOTES';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const removeNote = (id) => {
  return {
    type: REMOVE_NOTE,
    payload: id,
  };
};

export const updateNote = (note) => {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

export const searchNotes = (searchQuery) => {
  return {
    type: SEARCH_NOTES,
    payload: searchQuery,
  };
};
