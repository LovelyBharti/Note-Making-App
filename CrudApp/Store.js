import {createStore} from 'redux';
import notesReducer from './Reducer';

const store  = createStore (notesReducer);
export default store;