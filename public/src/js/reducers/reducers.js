import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerAccount from './reducer_account'

const rootReducer = combineReducers({
  form: formReducer,
  account: reducerAccount
  
});

export default rootReducer;

