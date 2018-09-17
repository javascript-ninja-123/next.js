import { combineReducers } from 'redux';
import BitcoinReducer from './bitcoin';


const rootReducer = combineReducers({
bitcoin:BitcoinReducer
});

export default rootReducer;
