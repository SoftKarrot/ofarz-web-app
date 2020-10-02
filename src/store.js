import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Cookie from 'js-cookie';
import { categoryDeleteReducer, categoryListReducer, categoryUpdateReducer, categorySaveReducer, categoryDetailsReducer } from './reducers/Regular/categoryReducers';
import { productTypeDeleteReducer, productTypeDetailsReducer, productTypeListReducer, productTypeSaveReducer, productTypeUpdateReducer } from './reducers/Regular/productTypeReducers';
import { productDeleteReducer, productDetailsReducer, productListByProductTypeCategoryReducer, productListReducer, productSaveReducer, productUpdateReducer } from './reducers/Regular/productReducers';
import { appSharerAddDownlineReducer, appSharerSigninReducer, appSharerUpdateReducer } from './reducers/Auth/appSharerReducers';
import { cartReducer } from './reducers/Regular/cartReducers';
import { roleDeleteReducer, roleDetailsReducer, roleListReducer, roleSaveReducer, roleUpdateReducer } from './reducers/Auth/applicationRoleReducers';
import { adminRegistrationReducer, adminSigninReducer, adminUpdateReducer } from './reducers/Auth/adminReducers';
import { moderatorAddReducer, moderatorSigninReducer, moderatorUpdateReducer } from './reducers/Auth/moderatorReducers';
import { agentAddReducer, agentSigninReducer, agentUpdateReducer } from './reducers/Auth/agentReducers';
import { shoperRegistrationReducer, shoperSigninReducer, shoperUpdateReducer } from './reducers/Auth/shoperReducers';
import { countryDeleteReducer, countryDetailsReducer, countryListReducer, countrySaveReducer, countryUpdateReducer } from './reducers/Area/countryReducers';
import { divisionDeleteReducer, divisionDetailsReducer, divisionListReducer, divisionSaveReducer, divisionUpdateReducer } from './reducers/Area/divisionReducers';
import { districtDeleteReducer, districtDetailsReducer, districtListReducer, districtSaveReducer, districtUpdateReducer } from './reducers/Area/districtReducers';
import { upozilaDeleteReducer, upozilaDetailsReducer, upozilaListReducer, upozilaSaveReducer, upozilaUpdateReducer } from './reducers/Area/upozilaReducers';
import { unionDeleteReducer, unionDetailsReducer, unionListReducer, unionSaveReducer, unionUpdateReducer } from './reducers/Area/unionOrWardReducers';
import { marketDeleteReducer, marketDetailsReducer, marketListReducer, marketSaveReducer, marketUpdateReducer } from './reducers/Area/marketReducers';
import { countryListReducerad, districtListReducerad, divisionListReducerad, marketListReducerad, unionListReducerad, upozilaListReducerad } from './reducers/Area/addressReducers';


const cartItems = Cookie.getJSON('cartItems') || [];
const appSharerInfo = Cookie.getJSON('appSharerInfo') || null;
const adminInfo = Cookie.getJSON('adminInfo') || null;
const moderatorInfo = Cookie.getJSON('moderatorInfo') || null;
const shoperInfo = Cookie.getJSON('shoperInfo') || null;

const initialState = {
    cart: { cartItems },
    appSharerSignin: { appSharerInfo },
    adminSignin: { adminInfo },
    moderatorSignin: { moderatorInfo },
    shoperSignin: { shoperInfo }
};

const reducer = combineReducers({

    countryList: countryListReducer,
    countryDetails: countryDetailsReducer,
    countrySave: countrySaveReducer,
    countryUpdate: countryUpdateReducer,
    countryDelete: countryDeleteReducer,

    divisionList: divisionListReducer,
    divisionDetails: divisionDetailsReducer,
    divisionSave: divisionSaveReducer,
    divisionUpdate: divisionUpdateReducer,
    divisionDelete: divisionDeleteReducer,

    districtList: districtListReducer,
    districtDetails: districtDetailsReducer,
    districtSave: districtSaveReducer,
    districtUpdate: districtUpdateReducer,
    districtDelete: districtDeleteReducer,

    upozilaList: upozilaListReducer,
    upozilaDetails: upozilaDetailsReducer,
    upozilaSave: upozilaSaveReducer,
    upozilaUpdate: upozilaUpdateReducer,
    upozilaDelete: upozilaDeleteReducer,

    unionList: unionListReducer,
    unionDetails: unionDetailsReducer,
    unionSave: unionSaveReducer,
    unionUpdate: unionUpdateReducer,
    unionDelete: unionDeleteReducer,

    marketList: marketListReducer,
    marketDetails: marketDetailsReducer,
    marketSave: marketSaveReducer,
    marketUpdate: marketUpdateReducer,
    marketDelete: marketDeleteReducer,


    countryListAd: countryListReducerad,
    divisionListAd: divisionListReducerad,
    districtListAd: districtListReducerad,
    upozilaListAd: upozilaListReducerad,
    unionListAd: unionListReducerad,
    marketListAd: marketListReducerad,


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
    productListByProductTypeCategory: productListByProductTypeCategoryReducer,
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

    adminSignin: adminSigninReducer,
    adminRegistration: adminRegistrationReducer,
    adminUpdate: adminUpdateReducer,

    moderatorSignin: moderatorSigninReducer,
    moderatorAdd: moderatorAddReducer,
    moderatorUpdate: moderatorUpdateReducer,

    agentSignin: agentSigninReducer,
    agentAdd: agentAddReducer,
    agentUpdate: agentUpdateReducer,

    shoperSignin: shoperSigninReducer,
    shoperRegistration: shoperRegistrationReducer,
    shoperUpdate: shoperUpdateReducer,

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;