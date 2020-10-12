//#region  Import
import axios from 'axios'
import Cookie from 'js-cookie';
import {
    WITHDRAW_FAIL_AGENT,
    WITHDRAW_FAIL_APPSHARER,
    WITHDRAW_FAIL_CEO,
    WITHDRAW_FAIL_KARROT,

    WITHDRAW_LIST_FAIL,
    WITHDRAW_LIST_FAIL_AGENT,
    WITHDRAW_LIST_FAIL_APPSHARER,
    WITHDRAW_LIST_FAIL_CEO,
    WITHDRAW_LIST_FAIL_KARROT,

    WITHDRAW_LIST_REQUEST,
    WITHDRAW_LIST_REQUEST_AGENT,
    WITHDRAW_LIST_REQUEST_APPSHARER,
    WITHDRAW_LIST_REQUEST_CEO,
    WITHDRAW_LIST_REQUEST_KARROT,

    WITHDRAW_LIST_SUCCESS,
    WITHDRAW_LIST_SUCCESS_AGENT,
    WITHDRAW_LIST_SUCCESS_APPSHARER,
    WITHDRAW_LIST_SUCCESS_CEO,
    WITHDRAW_LIST_SUCCESS_KARROT,

    WITHDRAW_REQUEST_AGENT,
    WITHDRAW_REQUEST_APPSHARER,
    WITHDRAW_REQUEST_CEO,
    WITHDRAW_REQUEST_KARROT,

    WITHDRAW_SUCCESS_AGENT,
    WITHDRAW_SUCCESS_APPSHARER,
    WITHDRAW_SUCCESS_CEO,
    WITHDRAW_SUCCESS_KARROT
} from '../../constants/Fund/withdrawConstants';
//#endregion

//#region Withdraw List
const listWithdraw = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST });
        const { data } = await axios.get("/api/Withdraw/GetAllPaymentList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL, payload: error.message });
    }
}
const listWithdrawAgent = () => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_LIST_REQUEST_AGENT });
        const { data } = await axios.get("/api/Withdraw/GetAllPaymentListAgent");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_AGENT, payload: error.message });
    }
}
const listWithdrawAppSharer = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_APPSHARER });
        const { data } = await axios.get("/api/Withdraw/getAllPaymentListAppSharer");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_APPSHARER, payload: error.message });
    }
}


const listWithdrawKarrot = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_KARROT });
        const { data } = await axios.get("/api/Withdraw/getAllPaymentListAppSharer");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_KARROT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_KARROT, payload: error.message });
    }
}

const listWithdrawCeo = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_CEO });
        const { data } = await axios.get("/api/Withdraw/getAllPaymentListAppSharer");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_CEO, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_CEO, payload: error.message });
    }
}

//#endregion

//#region Withdraw Money
const withdrawAgent = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_REQUEST_AGENT, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);

        dispatch({ type: WITHDRAW_SUCCESS_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_AGENT, payload: error.message });
    }
}
const withdrawAppSharer = (amount, agentPhnNumber, currentUserId) => async (dispatch, getState) => {

    const { userSignIn: { userInfo } } = getState();
    try {

        dispatch({ type: WITHDRAW_REQUEST_APPSHARER, payload: { amount, agentPhnNumber, currentUserId } });
        const { data } = await axios.post("/api/appsharer/WithdrawMoneyViaCashOut/", { amount, agentPhnNumber, currentUserId }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item3
            }
        });

        Cookie.set('userInfo', JSON.stringify(data));
        debugger
        dispatch({ type: WITHDRAW_SUCCESS_APPSHARER, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_APPSHARER, payload: error.message });
    }
}

const withdrawKarrot = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_REQUEST_KARROT, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: WITHDRAW_SUCCESS_KARROT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_KARROT, payload: error.message });
    }
}
const withdrawCeo = (agentPhoneNumber) => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_REQUEST_CEO, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/payments/GetAllPaymentListAgent/" + agentPhoneNumber);
        dispatch({ type: WITHDRAW_SUCCESS_CEO, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_CEO, payload: error.message });
    }
}
//#endregion

//#region Export
export {
    listWithdraw,
    listWithdrawAgent,
    listWithdrawAppSharer,
    listWithdrawKarrot,
    listWithdrawCeo,


    withdrawAgent,
    withdrawAppSharer,
    withdrawKarrot,
    withdrawCeo
}

//#endregion