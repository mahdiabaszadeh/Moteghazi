import { createStore, combineReducers } from 'redux'; 
import saveDataItemsReducer from './reducers/saveDataReducer'

const reducer = combineReducers({ items: saveDataItemsReducer }); 
const initialState = { items: { data: {} } }; 
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 


export default store;