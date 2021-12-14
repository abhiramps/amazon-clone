import {createStotre} from 'redux';
import rootReducers from './reducers'

const store= createStotre(rootReducers);
export default store;