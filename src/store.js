//#region Import
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Cookie from 'js-cookie';
import {
    categoryDeleteReducer,
    categoryListReducer,
    categoryUpdateReducer,
    categorySaveReducer,
    categoryDetailsReducer
} from './reducers/Regular/categoryReducers';
import {
    productTypeDeleteReducer,
    productTypeDetailsReducer,
    productTypeListReducer,
    productTypeSaveReducer,
    productTypeUpdateReducer
} from './reducers/Regular/productTypeReducers';
import {
    productDeleteReducer,
    productDetailsReducer,
    productListByProductTypeCategoryReducer,
    productListReducer,
    productSaveReducer,
    productUpdateReducer
} from './reducers/Regular/productReducers';
import {
    appSharerAddDownlineReducer,
    appSharerUpdateReducer
} from './reducers/Auth/appSharerReducers';
import { cartReducer } from './reducers/Regular/cartReducers';
import {
    roleDeleteReducer,
    roleDetailsReducer,
    roleListReducer,
    roleSaveReducer,
    roleUpdateReducer
} from './reducers/Auth/applicationRoleReducers';
import {
    adminProfileDetailsReducer,
    adminRegistrationReducer,
    adminUpdatePasswordReducer,
    adminUpdateReducer
} from './reducers/Auth/adminReducers';
import {
    moderatorAddReducer,
    moderatorUpdateReducer
} from './reducers/Auth/moderatorReducers';
import {
    agentAddReducer,
    agentUpdateReducer
} from './reducers/Auth/agentReducers';
import {
    shoperRegistrationReducer,
} from './reducers/Auth/shoperReducers';
import {
    countryDeleteReducer,
    countryDetailsReducer,
    countryListReducer,
    countrySaveReducer,
    countryUpdateReducer
} from './reducers/Area/countryReducers';
import {
    divisionDeleteReducer,
    divisionDetailsReducer,
    divisionListReducer,
    divisionSaveReducer,
    divisionUpdateReducer
} from './reducers/Area/divisionReducers';
import {
    districtDeleteReducer,
    districtDetailsReducer,
    districtListReducer,
    districtSaveReducer,
    districtUpdateReducer
} from './reducers/Area/districtReducers';
import {
    upozilaDeleteReducer,
    upozilaDetailsReducer,
    upozilaListReducer,
    upozilaSaveReducer,
    upozilaUpdateReducer
} from './reducers/Area/upozilaReducers';
import {
    unionDeleteReducer,
    unionDetailsReducer,
    unionListReducer,
    unionSaveReducer,
    unionUpdateReducer
} from './reducers/Area/unionOrWardReducers';
import {
    marketDeleteReducer,
    marketDetailsReducer,
    marketListReducer,
    marketSaveReducer,
    marketUpdateReducer
} from './reducers/Area/marketReducers';
import {
    countryListReducerad,
    districtListReducerad,
    divisionListReducerad,
    marketListReducerad,
    unionListReducerad,
    upozilaListReducerad
} from './reducers/Area/addressReducers';
import {
    paymentTypeDeleteReducer,
    paymentTypeDetailsReducer,
    paymentTypeListReducer,
    paymentTypeSaveReducer,
    paymentTypeUpdateReducer
} from './reducers/Fund/paymentTypeReducers';
import {
    paymentListAgentReducer,
    paymentListAppSharerReducer,
    paymentListBackShoppingOfferAgentReducer,
    paymentListBackShoppingOfferAppSharerReducer,
    paymentListBackShoppingOfferReducer,
    paymentListBackShoppingOfferShoperReducer,
    paymentListBackShoppingPromotionalAgentReducer,
    paymentListBackShoppingPromotionalAppSharerReducer,
    paymentListBackShoppingPromotionalReducer,
    paymentListMainAccountOfferAgentReducer,
    paymentListMainAccountOfferAppSharerReducer,
    paymentListMainAccountOfferReducer,
    paymentListMainAccountPromotionalAgentReducer,
    paymentListMainAccountPromotionalAppSharerReducer,
    paymentListMainAccountPromotionalReducer,
    paymentListReducer, paymentListShoperReducer,
    paymentListTableCashOfferAgentReducer,
    paymentListTableCashOfferAppSharerReducer,
    paymentListTableCashOfferReducer,
    paymentListTableCashOfferShoperReducer,
    paymentListTableCashPromotionalAgentReducer,
    paymentListTableCashPromotionalAppSharerReducer,
    paymentListTableCashPromotionalReducer,
    paymentSubmitBackShoppingOfferReducer,
    paymentSubmitBackShoppingPromotionalReducer,
    paymentSubmitMainAccountOfferReducer,
    paymentSubmitMainAccountPromotionalReducer,
    paymentSubmitTableCashOfferReducer,
    paymentSubmitTableCashPromotionalReducer
} from './reducers/Fund/paymentReducers';
import {
    withdrawAgentReducer,
    withdrawAppSharerReducer,
    withdrawCeoReducer,
    withdrawKarrotReducer,
    withdrawListAgentReducer,
    withdrawListAppSharerReducer,
    withdrawListCeoReducer,
    withdrawListKarrotReducer,
    withdrawListReducer
} from './reducers/Fund/withdrawReducers';
import {
    fundAgentReducer,
    fundAppSharerReducer,
    fundCeoReducer,
    fundKarrotReducer,
    fundListAgentReducer,
    fundListAppSharerReducer,
    fundListShoperReducer
} from './reducers/Fund/fundReducers';
import {
    SigninReducer
} from './reducers/Auth/signInReducers';
//#endregion

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;


const initialState = {
    cart: { cartItems },
    userSignIn: { userInfo },

};

const reducer = combineReducers({
    //#region Area
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
    //#endregion

    //#region Regular
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
    //#endregion

    //#region Auth
    applicationRoleList: roleListReducer,
    applicationRoleDetails: roleDetailsReducer,
    applicationRoleSave: roleSaveReducer,
    applicationRoleUpdate: roleUpdateReducer,
    applicationRoleDelete: roleDeleteReducer,

    userSignIn: SigninReducer,

    appSharerAddDownline: appSharerAddDownlineReducer,
    appSharerUpdate: appSharerUpdateReducer,

    adminRegistration: adminRegistrationReducer,
    adminUpdate: adminUpdateReducer,
    adminUpdatePassword: adminUpdatePasswordReducer,
    adminProfileDetails: adminProfileDetailsReducer,

    moderatorAdd: moderatorAddReducer,
    moderatorUpdate: moderatorUpdateReducer,

    agentAdd: agentAddReducer,
    agentUpdate: agentUpdateReducer,

    shoperRegistration: shoperRegistrationReducer,
    //#endregion

    //#region Payment

    paymentTypeList: paymentTypeListReducer,
    paymentTypeDetails: paymentTypeDetailsReducer,
    paymentTypeSave: paymentTypeSaveReducer,
    paymentTypeUpdate: paymentTypeUpdateReducer,
    paymentTypeDelete: paymentTypeDeleteReducer,


    paymentList: paymentListReducer,
    paymentListAgent: paymentListAgentReducer,
    paymentListAppSharer: paymentListAppSharerReducer,
    paymentListShoper: paymentListShoperReducer,


    paymentListTableCashOffer: paymentListTableCashOfferReducer,
    paymentListTableCashOfferAgent: paymentListTableCashOfferAgentReducer,
    paymentListTableCashOfferAppSharer: paymentListTableCashOfferAppSharerReducer,
    paymentListTableCashOfferShoper: paymentListTableCashOfferShoperReducer,

    paymentListTableCashPromotional: paymentListTableCashPromotionalReducer,
    paymentListTableCashPromotionalAgent: paymentListTableCashPromotionalAgentReducer,
    paymentListTableCashPromotionalAppSharer: paymentListTableCashPromotionalAppSharerReducer,

    paymentListMainAccountOffer: paymentListMainAccountOfferReducer,
    paymentListMainAccountOfferAppSharer: paymentListMainAccountOfferAppSharerReducer,
    paymentListMainAccountOfferAgent: paymentListMainAccountOfferAgentReducer,

    paymentListMainAccountPromotional: paymentListMainAccountPromotionalReducer,
    paymentListMainAccountPromotionalAgent: paymentListMainAccountPromotionalAgentReducer,
    paymentListMainAccountPromotionalAppSharer: paymentListMainAccountPromotionalAppSharerReducer,

    paymentListBackShoppingOffer: paymentListBackShoppingOfferReducer,
    paymentListBackShoppingOfferAgent: paymentListBackShoppingOfferAgentReducer,
    paymentListBackShoppingOfferAppSharer: paymentListBackShoppingOfferAppSharerReducer,
    paymentListBackShoppingOfferShoper: paymentListBackShoppingOfferShoperReducer,

    paymentListBackShoppingPromotional: paymentListBackShoppingPromotionalReducer,
    paymentListBackShoppingPromotionalAgent: paymentListBackShoppingPromotionalAgentReducer,
    paymentListBackShoppingPromotionalAppSharer: paymentListBackShoppingPromotionalAppSharerReducer,

    paymentSubmitTableCashOffer: paymentSubmitTableCashOfferReducer,
    paymentSubmitTableCashPromotional: paymentSubmitTableCashPromotionalReducer,

    paymentSubmitMainAccountOffer: paymentSubmitMainAccountOfferReducer,
    paymentSubmitMainAccountPromotional: paymentSubmitMainAccountPromotionalReducer,

    paymentSubmitBackShoppingOffer: paymentSubmitBackShoppingOfferReducer,
    paymentSubmitBackShoppingPromotional: paymentSubmitBackShoppingPromotionalReducer,

    //#endregion

    //#region Withdraw
    awithdrawReducer: withdrawListReducer,
    awithdrawAgentReducer: withdrawListAgentReducer,
    awithdrawAppSharerReducer: withdrawListAppSharerReducer,
    awithdrawKarrotReducer: withdrawListKarrotReducer,
    awithdrawCeoReducer: withdrawListCeoReducer,

    awithdrawAgent: withdrawAgentReducer,
    awithdrawAppSharer: withdrawAppSharerReducer,
    awithdrawKarrot: withdrawKarrotReducer,
    awithdrawCeo: withdrawCeoReducer,
    //#endregion

    //#region Fund
    fundAgentReducer: fundListAgentReducer,
    fundAppSharerReducer: fundListAppSharerReducer,
    fundShoperReducer: fundListShoperReducer,

    fundAgent: fundAgentReducer,
    fundAppSharer: fundAppSharerReducer,
    fundKarrot: fundKarrotReducer,
    fundCeo: fundCeoReducer,
    //#endregion

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;