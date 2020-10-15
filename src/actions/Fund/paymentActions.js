
//#region Import
import axios from 'axios'
import Cookie from 'js-cookie';
import {
    PAYMENT_DETAILS_FAIL,
    PAYMENT_DETAILS_REQUEST,
    PAYMENT_DETAILS_SUCCESS,

    PAYMENT_LIST_REQUEST,
    PAYMENT_LIST_SUCCESS,
    PAYMENT_LIST_FAIL,

    PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST,
    PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS,
    PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL,

    PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST,
    PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS,
    PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL,

    PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST,
    PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS,
    PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL,

    PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST,
    PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS,
    PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL,

    PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST,
    PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS,
    PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL,

    PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST,
    PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS,
    PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL,

    PAYMENT_SUBMIT_TABLECASH_OFFER_REQUEST,
    PAYMENT_SUBMIT_TABLECASH_OFFER_SUCCESS,
    PAYMENT_SUBMIT_TABLECASH_OFFER_FAIL,

    PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_REQUEST,
    PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_SUCCESS,
    PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_FAIL,

    PAYMENT_SUBMIT_MAINACCOUNT_OFFER_REQUEST,
    PAYMENT_SUBMIT_MAINACCOUNT_OFFER_SUCCESS,
    PAYMENT_SUBMIT_MAINACCOUNT_OFFER_FAIL,

    PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_REQUEST,
    PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_SUCCESS,
    PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_FAIL,

    PAYMENT_SUBMIT_BACKSHOPPING_OFFER_REQUEST,
    PAYMENT_SUBMIT_BACKSHOPPING_OFFER_SUCCESS,
    PAYMENT_SUBMIT_BACKSHOPPING_OFFER_FAIL,

    PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_REQUEST,
    PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_SUCCESS,
    PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_FAIL, PAYMENT_LIST_REQUEST_AGENT, PAYMENT_LIST_SUCCESS_AGENT, PAYMENT_LIST_FAIL_AGENT, PAYMENT_LIST_REQUEST_APPSHARER, PAYMENT_LIST_SUCCESS_APPSHARER, PAYMENT_LIST_FAIL_APPSHARER, PAYMENT_LIST_REQUEST_SHOPER, PAYMENT_LIST_SUCCESS_SHOPER, PAYMENT_LIST_FAIL_SHOPER

} from '../../constants/Fund/paymentConstants';
//#endregion

//#region Payment Lists

const listPayments = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_REQUEST });
        const { data } = await axios.get("/api/payments/GetAllPaymentList");
        dispatch({ type: PAYMENT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_FAIL, payload: error.message });
    }
}
const listPaymentsAgent = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: PAYMENT_LIST_REQUEST_AGENT, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: PAYMENT_LIST_SUCCESS_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_FAIL_AGENT, payload: error.message });
    }
}
const listPaymentsAppSharer = (appSharerPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_REQUEST_APPSHARER, payload: { appSharerPhoneNumber } });
        const { data } = await axios.get("/api/payments/getAllPaymentListAppSharer/" + appSharerPhoneNumber);
        dispatch({ type: PAYMENT_LIST_SUCCESS_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_FAIL_APPSHARER, payload: error.message });
    }
}
const listPaymentsShoper = (shoperPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_REQUEST_SHOPER, payload: { shoperPhoneNumber } });
        const { data } = await axios.get("/api/payments/getAllPaymentListShoper/" + shoperPhoneNumber);
        dispatch({ type: PAYMENT_LIST_SUCCESS_SHOPER, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_FAIL_SHOPER, payload: error.message });
    }
}
//#endregion

//#region Payment List TableCash Offer

const listPaymentsTableCashOffer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}
const listPaymentsTableCashOfferAgent = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}
const listPaymentsTableCashOfferAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}
const listPaymentsTableCashOfferShoper = () => async (dispatch) => {

    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}
//#endregion

//#region Payment List MainAccount Offer

const listPaymentsMainAccountOffer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsMainAccountOfferAgent = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsMainAccountOfferAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}
//#endregion

//#region Payment List Backshoppimg Offer
const listPaymentsBackShoppingOffer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsBackShoppingOfferAgent = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}


const listPaymentsBackShoppingOfferAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsBackShoppingOfferShoper = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_OFFER_PRODUCT_FAIL, payload: error.message });
    }
}
//#endregion

//#region Payment List TableCash Promotional

const listPaymentsTableCashPromotional = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsTableCashPromotionalAgent = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsTableCashPromotionalAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_TABLECASH_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}
//#endregion

//#region Payment List MainAccount Promotional


const listPaymentsMainAccountPromotional = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsMainAccountPromotionalAgent = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsMainAccountPromotionalAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_MAINACCOUNT_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}
//#endregion

//#region Payment List Backshoppimg Promotional

const listPaymentsBackShoppingPromotional = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsBackShoppingPromotionalAgent = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}

const listPaymentsBackShoppingPromotionalAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/payment");
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENT_LIST_BACKSHOPPING_PROMOTIONAL_PRODUCT_FAIL, payload: error.message });
    }
}
//#endregion

//#region Submit Payments App Sharer

const submitPaymentTableCashOffer = (amount, agentPhnNumber, payerId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_OFFER_REQUEST, payload: { amount, agentPhnNumber, payerId } });
        const { data } = await axios.post('/api/appsharer/paymentSubmitTableCashOffer', { amount, agentPhnNumber, payerId })
        Cookie.set('userInfo', JSON.stringify(data));
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_OFFER_SUCCESS, payload: data });
    } catch (error) {
        Cookie.set('userInfo', JSON.stringify(userInfo));
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_OFFER_FAIL, payload: error.message });
    }
}

const submitPaymentTableCashPromotional = (amount, agentPhnNumber, payerId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_REQUEST, payload: { amount, agentPhnNumber, payerId } });
        const { data } = await axios.post('/api/appsharer/paymentSubmitTableCashPromotional', { amount, agentPhnNumber, payerId })
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_SUCCESS, payload: data });
    } catch (error) {
        Cookie.set('userInfo', JSON.stringify(userInfo));
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_PROMOTIONAL_FAIL, payload: error.message });
    }
}


const submitPaymentMainAccountOffer = (payment) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_SUBMIT_MAINACCOUNT_OFFER_REQUEST, payload: payment });
        const { data } = await axios.post('/api/appsharer/paymentSubmitMainAccounntOffer', payment)
        dispatch({ type: PAYMENT_SUBMIT_MAINACCOUNT_OFFER_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PAYMENT_SUBMIT_MAINACCOUNT_OFFER_FAIL, payload: error.message });
    }
}

const submitPaymentMainAccountPromotional = (payment) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_REQUEST, payload: payment });
        const { data } = await axios.post('/api/appsharer/paymentSubmitMainAccounntPromotional', payment)
        dispatch({ type: PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PAYMENT_SUBMIT_MAINACCOUNT_PROMOTIONAL_FAIL, payload: error.message });
    }
}

const submitPaymentBackShoppingOffer = (payment) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_OFFER_REQUEST, payload: payment });
        const { data } = await axios.post('/api/appsharer/paymentSubmitBackShoppingOffer', payment)
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_OFFER_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_OFFER_FAIL, payload: error.message });
    }
}

const submitPaymentBackShoppingPromotional = (payment) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_REQUEST, payload: payment });
        const { data } = await axios.post('/api/appsharer/paymentSubmitBackShoppingPromotional', payment)
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_PROMOTIONAL_FAIL, payload: error.message });
    }
}
//#endregion

//#region Details Paymnet
const detailsPayment = (paymentId) => async (dispatch) => {

    try {
        dispatch({ type: PAYMENT_DETAILS_REQUEST, payload: paymentId });
        const { data } = await axios.get("/api/payment/" + paymentId)
        dispatch({ type: PAYMENT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PAYMENT_DETAILS_FAIL, payload: error.message })
    }
}
//#endregion


//#region Submit Payment Shoper
const submitPaymentShoperTableCashOffer = (amount, agentPhnNumber, payerId) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_OFFER_REQUEST, payload: { amount, agentPhnNumber, payerId } });
        const { data } = await axios.post('/api/shoper/MakePaymentViaDirectCashOffer', { amount, agentPhnNumber, payerId })
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_OFFER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PAYMENT_SUBMIT_TABLECASH_OFFER_FAIL, payload: error.message });
    }
}

const submitPaymentShoperBackShoppingOffer = (amount, agentPhnNumber, payerId) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_OFFER_REQUEST, payload: { amount, agentPhnNumber, payerId } });
        const { data } = await axios.post('/api/shoper/MakePaymentViaBackShoppingOffer', { amount, agentPhnNumber, payerId })
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_OFFER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PAYMENT_SUBMIT_BACKSHOPPING_OFFER_FAIL, payload: error.message });
    }
}


//#endregion

//#region exportd
export {
    listPayments,
    listPaymentsAgent,
    listPaymentsAppSharer,
    listPaymentsShoper,

    listPaymentsTableCashOffer,
    listPaymentsTableCashOfferAgent,
    listPaymentsTableCashOfferAppSharer,
    listPaymentsTableCashOfferShoper,

    listPaymentsMainAccountOffer,
    listPaymentsMainAccountOfferAgent,
    listPaymentsMainAccountOfferAppSharer,

    listPaymentsTableCashPromotional,
    listPaymentsTableCashPromotionalAgent,
    listPaymentsTableCashPromotionalAppSharer,

    listPaymentsBackShoppingOffer,
    listPaymentsBackShoppingOfferAgent,
    listPaymentsBackShoppingOfferAppSharer,
    listPaymentsBackShoppingOfferShoper,

    listPaymentsMainAccountPromotional,
    listPaymentsMainAccountPromotionalAgent,
    listPaymentsMainAccountPromotionalAppSharer,

    listPaymentsBackShoppingPromotional,
    listPaymentsBackShoppingPromotionalAgent,
    listPaymentsBackShoppingPromotionalAppSharer,

    submitPaymentTableCashOffer,
    submitPaymentTableCashPromotional,

    submitPaymentMainAccountOffer,
    submitPaymentMainAccountPromotional,

    submitPaymentBackShoppingOffer,
    submitPaymentBackShoppingPromotional,


    submitPaymentShoperTableCashOffer,
    submitPaymentShoperBackShoppingOffer,

    detailsPayment
}
//#endregion

