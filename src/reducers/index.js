import {combineReducers} from 'redux';
import listReducer from './listReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    listReducer, 
    studentReducer
});

export default rootReducer;