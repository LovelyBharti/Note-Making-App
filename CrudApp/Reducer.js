
import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE, SEARCH_NOTES } from './Action';

const initialState = {
  notes: [],
  searchQuery: '',
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case REMOVE_NOTE:
      return { ...state, notes: state.notes.filter((note) => note.id !== action.payload) };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        ),
      };
    case SEARCH_NOTES:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default notesReducer;

