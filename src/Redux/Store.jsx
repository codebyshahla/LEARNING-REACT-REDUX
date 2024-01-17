import { createStore, combineReducers } from 'redux';
import CounterReducer from './Reducer';
// import userReducer from './UserReducer';


const combinedReducers = combineReducers({
  counter: CounterReducer,
//   user: userReducer,
});

const store = createStore(combinedReducers);

export default store;