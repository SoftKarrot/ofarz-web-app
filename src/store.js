import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { categoryDeleteReducer, categoryDetailsReducer, categoryListReducer, categoryUpdateReducer, categorySaveReducer } from './reducers/categoryReducers';
import { reducer as formReducer } from 'redux-form'

const initialState = {};
const reducer = combineReducers({
    categoryList: categoryListReducer, 
    categoryDetails: categoryDetailsReducer,
    categorySave: categorySaveReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,
    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;