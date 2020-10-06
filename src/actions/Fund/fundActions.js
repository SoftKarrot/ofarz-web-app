//#region import
import axios from 'axios'
import {

    FUND_LIST_REQUEST_AGENT,
    FUND_LIST_SUCCESS_AGENT,
    FUND_LIST_FAIL_AGENT,

    FUND_LIST_REQUEST_APPSHARER,
    FUND_LIST_SUCCESS_APPSHARER,
    FUND_LIST_FAIL_APPSHARER,

    FUND_LIST_REQUEST_SHOPER,
    FUND_LIST_SUCCESS_SHOPER,
    FUND_LIST_FAIL_SHOPER,

    FUND_REQUEST_AGENT,
    FUND_SUCCESS_AGENT,
    FUND_FAIL_AGENT,

    FUND_REQUEST_APPSHARER,
    FUND_SUCCESS_APPSHARER,
    FUND_FAIL_APPSHARER,

    FUND_REQUEST_SHOPER,
    FUND_SUCCESS_SHOPER,
    FUND_FAIL_SHOPER,

    FUND_REQUEST_KARROT,
    FUND_SUCCESS_KARROT,
    FUND_FAIL_KARROT,

    FUND_REQUEST_CEO,
    FUND_SUCCESS_CEO,
    FUND_FAIL_CEO
} from '../../constants/Fund/fundConstants';
//#endregion


const listFundsAgent = () => async (dispatch) => {

    try {

        dispatch({ type: FUND_LIST_REQUEST_AGENT });
        const { data } = await axios.get("/api/funds/GetAllPaymentListAgent");
        dispatch({ type: FUND_LIST_SUCCESS_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_AGENT, payload: error.message });
    }
}
const listFundsAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: FUND_LIST_REQUEST_APPSHARER });
        const { data } = await axios.get("/api/funds/getAllPaymentListAppSharer");
        dispatch({ type: FUND_LIST_SUCCESS_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_APPSHARER, payload: error.message });
    }
}
const listFundsShoper = () => async (dispatch) => {
    try {
        dispatch({ type: FUND_LIST_REQUEST_SHOPER });
        const { data } = await axios.get("/api/funds/getAllPaymentListShoper");
        dispatch({ type: FUND_LIST_SUCCESS_SHOPER, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_LIST_FAIL_SHOPER, payload: error.message });
    }
}
//#endregion

//#region Get One Fund
const fundAgent = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_AGENT, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: FUND_SUCCESS_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_AGENT, payload: error.message });
    }
}
const fundAppSharer = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_APPSHARER, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: FUND_SUCCESS_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_APPSHARER, payload: error.message });
    }
}
const fundShoper = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_SHOPER, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: FUND_SUCCESS_SHOPER, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_SHOPER, payload: error.message });
    }
}
const fundKarrot = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_KARROT, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: FUND_SUCCESS_KARROT, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_KARROT, payload: error.message });
    }
}
const fundCeo = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: FUND_REQUEST_CEO, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: FUND_SUCCESS_CEO, payload: data });

    }
    catch (error) {
        dispatch({ type: FUND_FAIL_CEO, payload: error.message });
    }
}
//#endregion

//#region Export
export {
    listFunds,
    listFundsAgent,
    listFundsAppSharer,
    listFundsShoper,

    fundAgent,
    fundAppSharer,
    fundShoper,
    fundKarrot,
    fundCeo
}

//#endregion