import {combineReducers} from 'redux';
import PersonReducer from '../../views/person/reducer/reducer';

const RootReducer = combineReducers({
  person: PersonReducer
});

export default RootReducer;