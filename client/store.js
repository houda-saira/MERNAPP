import {createstore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {}; 
const middleware= [thunk];
const store = createStore(rootReducer, initialstate, compose(
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION__()
));
export default store ;
