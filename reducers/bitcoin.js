import {
  FETCH_DATA
} from '../actions/type';

const INITIAL_STATE = {
  bitcoinData:[]
}

export default (state = INITIAL_STATE,action) => {
  switch(action.type){
    case FETCH_DATA:
    return {...state, bitcoinData:action.payload.bpi}
    default:
    return state;
  }
}
