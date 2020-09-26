import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Cookie from 'js-cookie';
import { categoryDeleteReducer, categoryListReducer, categoryUpdateReducer, categorySaveReducer, categoryDetailsReducer } from './reducers/Regular/categoryReducers';
import { productTypeDeleteReducer, productTypeDetailsReducer, productTypeListReducer, productTypeSaveReducer, productTypeUpdateReducer } from './reducers/Regular/productTypeReducers';
import { productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer, productUpdateReducer } from './reducers/Regular/productReducers';
import { appSharerAddDownlineReducer, appSharerSigninReducer, appSharerUpdateReducer } from './reducers/Auth/appSharerReducers';
import { cartReducer } from './reducers/Regular/cartReducers';
import { roleDeleteReducer, roleDetailsReducer, roleListReducer, roleSaveReducer, roleUpdateReducer } from './reducers/Auth/applicationRoleReducers';


const cartItems = Cookie.getJSON('cartItems') || [];
const appSharerInfo = Cookie.getJSON('appSharerInfo') || null;

const initialState = {
    cart: { cartItems },
    appSharerSignin: { appSharerInfo }
};


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

    cart: cartReducer,


    applicationRoleList: roleListReducer,
    applicationRoleDetails: roleDetailsReducer,
    applicationRoleSave: roleSaveReducer,
    applicationRoleUpdate: roleUpdateReducer,
    applicationRoleDelete: roleDeleteReducer,

    appSharerSignin: appSharerSigninReducer,
    appSharerAddDownline: appSharerAddDownlineReducer,
    appSharerUpdate: appSharerUpdateReducer,

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;