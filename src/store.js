import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { categoryDeleteReducer, categoryListReducer, categoryUpdateReducer, categorySaveReducer, categoryDetailsReducer } from './reducers/categoryReducers';
import { productTypeDeleteReducer, productTypeDetailsReducer, productTypeListReducer, productTypeSaveReducer, productTypeUpdateReducer } from './reducers/productTypeReducers';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer, productUpdateReducer } from './reducers/productReducers';

const initialState = {};

const reducer = combineReducers({
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categorySave: categorySaveReducer,
    categoryUpdate: categoryUpdateReducer,
    categoryDelete: categoryDeleteReducer,

    productTypeList: productTypeListReducer,
    productTypeDetails: productTypeDetailsReducer,
    productTypeSave: productTypeSaveReducer,
    productTypeUpdate: productTypeUpdateReducer,
    productTypeDelete: productTypeDeleteReducer,


    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;