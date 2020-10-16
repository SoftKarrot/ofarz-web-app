//#region  Import
import axios from 'axios'
import Cookie from 'js-cookie';
import {

    WITHDRAW_FAIL_AGENT_TO_OFARZ,
    WITHDRAW_FAIL_APPSHARER_TO_AGENT,
    WITHDRAW_FAIL_APPSHARER_TO_OFARZ,

    WITHDRAW_FAIL_CEO_TO_AGENT,
    WITHDRAW_FAIL_CEO_TO_OFARZ,


    WITHDRAW_FAIL_KARROT_TO_AGENT,
    WITHDRAW_FAIL_KARROT_TO_OFARZ,

    WITHDRAW_LIST_FAIL,

    WITHDRAW_LIST_FAIL_AGENT_TO_OFARZ,

    WITHDRAW_LIST_FAIL_APPSHARER_TO_AGENT,

    WITHDRAW_LIST_FAIL_APPSHARER_TO_OFARZ,

    WITHDRAW_LIST_FAIL_CEO_TO_AGENT,


    WITHDRAW_LIST_FAIL_CEO_TO_OFARZ,


    WITHDRAW_LIST_FAIL_KARROT_TO_AGENT,

    WITHDRAW_LIST_FAIL_KARROT_TO_OFARZ,

    WITHDRAW_LIST_REQUEST,

    WITHDRAW_LIST_REQUEST_AGENT_TO_OFARZ,

    WITHDRAW_LIST_REQUEST_APPSHARER_TO_AGENT,

    WITHDRAW_LIST_REQUEST_APPSHARER_TO_OFARZ,

    WITHDRAW_LIST_REQUEST_CEO_TO_AGENT,


    WITHDRAW_LIST_REQUEST_CEO_TO_OFARZ,


    WITHDRAW_LIST_REQUEST_KARROT_TO_AGENT,

    WITHDRAW_LIST_REQUEST_KARROT_TO_OFARZ,

    WITHDRAW_LIST_SUCCESS,

    WITHDRAW_LIST_SUCCESS_AGENT_TO_OFARZ,

    WITHDRAW_LIST_SUCCESS_APPSHARER_TO_AGENT,

    WITHDRAW_LIST_SUCCESS_APPSHARER_TO_OFARZ,

    WITHDRAW_LIST_SUCCESS_CEO_TO_AGENT,


    WITHDRAW_LIST_SUCCESS_CEO_TO_OFARZ,


    WITHDRAW_LIST_SUCCESS_KARROT_TO_AGENT,


    WITHDRAW_LIST_SUCCESS_KARROT_TO_OFARZ,


    WITHDRAW_REQUEST_AGENT_TO_OFARZ,

    WITHDRAW_REQUEST_APPSHARER_TO_AGENT,
    WITHDRAW_REQUEST_APPSHARER_TO_OFARZ,

    WITHDRAW_REQUEST_CEO_TO_AGENT,
    WITHDRAW_REQUEST_CEO_TO_OFARZ,


    WITHDRAW_REQUEST_KARROT_TO_AGENT,

    WITHDRAW_REQUEST_KARROT_TO_OFARZ,


    WITHDRAW_SUCCESS_AGENT_TO_OFARZ,

    WITHDRAW_SUCCESS_APPSHARER_TO_AGENT,
    WITHDRAW_SUCCESS_APPSHARER_TO_OFARZ,

    WITHDRAW_SUCCESS_CEO_TO_AGENT,
    WITHDRAW_SUCCESS_CEO_TO_OFARZ,

    WITHDRAW_SUCCESS_KARROT_TO_AGENT,
    WITHDRAW_SUCCESS_KARROT_TO_OFARZ
} from '../../constants/Fund/withdrawConstants';
//#endregion

//#region Withdraw List
const listWithdraw = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST });
        const { data } = await axios.get("/api/funds/GetAllWithdrawList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL, payload: error.message });
    }
}

//#region Withdraw list Agent
const listWithdrawAgentToOfarz = () => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_LIST_REQUEST_AGENT_TO_OFARZ });
        const { data } = await axios.get("/api/funds/GetAgentWithdrawList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_AGENT_TO_OFARZ, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_AGENT_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw List AppSharer
const listWithdrawAppSharerToAgent = (appSharerPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_APPSHARER_TO_AGENT, payload: { appSharerPhoneNumber } });
        const { data } = await axios.get("/api/funds/GetAppSharerWithdrawList/" + appSharerPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_APPSHARER_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_APPSHARER_TO_AGENT, payload: error.message });
    }
}


const listWithdrawAppSharerToOfarz = (appSharerPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_APPSHARER_TO_OFARZ, payload: { appSharerPhoneNumber } });
        const { data } = await axios.get("/api/funds/GetAppSharerWithdrawList/" + appSharerPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_APPSHARER_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_APPSHARER_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw List Karrot


const listWithdrawKarrotToAgent = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_KARROT_TO_AGENT });
        const { data } = await axios.get("/api/funds/GetKarrotWithdrawList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_KARROT_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_KARROT_TO_AGENT, payload: error.message });
    }
}

const listWithdrawKarrotToOfarz = (karrotPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_KARROT_TO_OFARZ, payload: { karrotPhoneNumber } });
        const { data } = await axios.get("/api/funds/GetKarrotWithdrawListToOfarz/" + karrotPhoneNumber);
        dispatch({ type: WITHDRAW_LIST_SUCCESS_KARROT_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_KARROT_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw List CEO
const listWithdrawCeoToAgent = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_CEO_TO_AGENT });
        const { data } = await axios.get("/api/funds/GetCeoWithdrawList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_CEO_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_CEO_TO_AGENT, payload: error.message });
    }
}

const listWithdrawCeoToOfarz = () => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_LIST_REQUEST_CEO_TO_OFARZ });
        const { data } = await axios.get("/api/funds/GetCeoWithdrawList");
        dispatch({ type: WITHDRAW_LIST_SUCCESS_CEO_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_LIST_FAIL_CEO_TO_OFARZ, payload: error.message });
    }
}
//#endregion
//#endregion

//#region Withdraw Money Agent
const withdrawAgentToOfarz = (agentPhoneNumber) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_REQUEST_AGENT_TO_OFARZ, payload: { agentPhoneNumber } });
        const { data } = await axios.get("/api/agent/WithdrawMoneyToOfarz/" + agentPhoneNumber);
        dispatch({ type: WITHDRAW_SUCCESS_AGENT_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_AGENT_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region Withdraw Money App Sharer
const withdrawAppSharerToAgent = (amount, agentPhnNumber, currentUserId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: WITHDRAW_REQUEST_APPSHARER_TO_AGENT, payload: { amount, agentPhnNumber, currentUserId } });
        const { data } = await axios.post("/api/appsharer/WithdrawMoneyAppSharerToAgent/", { amount, agentPhnNumber, currentUserId });
        dispatch({ type: WITHDRAW_SUCCESS_APPSHARER_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_APPSHARER_TO_AGENT, payload: error.message });
    }
}
const withdrawAppSharerToOfarz = (amount, agentPhnNumber, currentUserId) => async (dispatch, getState) => {
    try {
        dispatch({ type: WITHDRAW_REQUEST_APPSHARER_TO_OFARZ, payload: { amount, agentPhnNumber, currentUserId } });
        const { data } = await axios.post("/api/appsharer/WithdrawMoneyAppSharerToOfarz/", { amount, agentPhnNumber, currentUserId });
        dispatch({ type: WITHDRAW_SUCCESS_APPSHARER_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_APPSHARER_TO_OFARZ, payload: error.message });
    }
}
//#endregion

//#region WithdrawMoney Karrot
const withdrawKarrotToAgnet = (amount, agentPhoneNumber, karrotId) => async (dispatch) => {

    try {

        dispatch({ type: WITHDRAW_REQUEST_KARROT_TO_AGENT, payload: { amount, agentPhoneNumber, karrotId } });
        const { data } = await axios.post("/api/karrot/WithdrawMoneyKarrotToAgent/", { amount, agentPhoneNumber, karrotId });
        dispatch({ type: WITHDRAW_SUCCESS_KARROT_TO_AGENT, payload: data });

    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_KARROT_TO_AGENT, payload: error.message });
    }
}
const withdrawKarrotToOfarz = (amount, ofarzPhoneNumber, karrotId) => async (dispatch) => {
    try {
        dispatch({ type: WITHDRAW_REQUEST_KARROT_TO_OFARZ, payload: { amount, ofarzPhoneNumber, karrotId } });
        const { data } = await axios.post("/api/karrot/WithdrawMoneyKarrotToOfarz/", { amount, ofarzPhoneNumber, karrotId });
        dispatch({ type: WITHDRAW_SUCCESS_KARROT_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_KARROT_TO_OFARZ, payload: error.message });
    }
}

//#endregion

//#region Withdraw Money Ceo
const withdrawCeoToAgent = (amount, agentPhoneNumber, ceoId) => async (dispatch) => {
    try {
        debugger
        dispatch({ type: WITHDRAW_REQUEST_CEO_TO_AGENT, payload: { amount, agentPhoneNumber, ceoId } });
        const { data } = await axios.post("/api/ceo/WithdrawMoneyCeoToAgent/", { amount, agentPhoneNumber, ceoId });
        dispatch({ type: WITHDRAW_SUCCESS_CEO_TO_AGENT, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_CEO_TO_AGENT, payload: error.message });
    }
}
const withdrawCeoToOfarz = (amount, ofarzPhoneNumber, ceoId) => async (dispatch) => {

    try {
        dispatch({ type: WITHDRAW_REQUEST_CEO_TO_OFARZ, payload: { amount, ofarzPhoneNumber, ceoId } });
        const { data } = await axios.post("/api/ceo/WithdrawMoneyCeoToOfarz/", { amount, ofarzPhoneNumber, ceoId });
        dispatch({ type: WITHDRAW_SUCCESS_CEO_TO_OFARZ, payload: data });
    }
    catch (error) {
        dispatch({ type: WITHDRAW_FAIL_CEO_TO_OFARZ, payload: error.message });
    }
}
//#endregion



//#region Export
export {
    listWithdraw,

    listWithdrawAgentToOfarz,

    listWithdrawAppSharerToAgent,
    listWithdrawAppSharerToOfarz,

    listWithdrawKarrotToAgent,
    listWithdrawKarrotToOfarz,

    listWithdrawCeoToAgent,
    listWithdrawCeoToOfarz,

    withdrawAgentToOfarz,

    withdrawAppSharerToAgent,
    withdrawAppSharerToOfarz,

    withdrawCeoToAgent,
    withdrawCeoToOfarz,

    withdrawKarrotToAgnet,
    withdrawKarrotToOfarz


}

//#endregion