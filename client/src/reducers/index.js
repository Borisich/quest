import { combineReducers } from 'redux';
import ViewReducer from './reducer_active_view';

const rootReducer = combineReducers({
  view: ViewReducer
})

export default rootReducer;
