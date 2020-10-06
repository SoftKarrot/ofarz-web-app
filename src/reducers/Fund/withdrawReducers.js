//#region Import
import {
    WITHDRAW_LIST_REQUEST,
    WITHDRAW_LIST_SUCCESS,
    WITHDRAW_LIST_FAIL,

    WITHDRAW_LIST_REQUEST_AGENT,
    WITHDRAW_LIST_SUCCESS_AGENT,
    WITHDRAW_LIST_FAIL_AGENT,

    WITHDRAW_LIST_REQUEST_APPSHARER,
    WITHDRAW_LIST_SUCCESS_APPSHARER,
    WITHDRAW_LIST_FAIL_APPSHARER,

    WITHDRAW_LIST_REQUEST_KARROT,
    WITHDRAW_LIST_SUCCESS_KARROT,
    WITHDRAW_LIST_FAIL_KARROT,

    WITHDRAW_LIST_REQUEST_CEO,
    WITHDRAW_LIST_SUCCESS_CEO,
    WITHDRAW_LIST_FAIL_CEO,

    WITHDRAW_REQUEST_AGENT,
    WITHDRAW_SUCCESS_AGENT,
    WITHDRAW_FAIL_AGENT,

    WITHDRAW_REQUEST_APPSHARER,
    WITHDRAW_SUCCESS_APPSHARER,
    WITHDRAW_FAIL_APPSHARER,

    WITHDRAW_REQUEST_KARROT,
    WITHDRAW_SUCCESS_KARROT,
    WITHDRAW_FAIL_KARROT,

    WITHDRAW_REQUEST_CEO,
    WITHDRAW_SUCCESS_CEO,
    WITHDRAW_FAIL_CEO
} from "../../constants/Fund/withdrawConstants";

//#endregion
let initialState = {
    withdraw: false
}
//#region Withdraw List
function withdrawListReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function withdrawListAgentReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_AGENT:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_AGENT:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function withdrawListAppSharerReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_APPSHARER:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_APPSHARER:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListKarrotReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_KARROT:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_KARROT:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_KARROT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawListCeoReducer(state = { withdraws: [] }, action) {
    switch (action.type) {
        case WITHDRAW_LIST_REQUEST_CEO:
            return { loading: true };
        case WITHDRAW_LIST_SUCCESS_CEO:
            return { loading: false, withdraws: action.payload };
        case WITHDRAW_LIST_FAIL_CEO:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
//#endregion

//#region Withdraw One
function withdrawAgentReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_AGENT:
            return { loading: true };
        case WITHDRAW_SUCCESS_AGENT:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function withdrawAppSharerReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_APPSHARER:
            return { loading: true };
        case WITHDRAW_SUCCESS_APPSHARER:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function withdrawKarrotReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_KARROT:
            return { loading: true };
        case WITHDRAW_SUCCESS_KARROT:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_KARROT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function withdrawCeoReducer(state = initialState, action) {

    switch (action.type) {
        case WITHDRAW_REQUEST_CEO:
            return { loading: true };
        case WITHDRAW_SUCCESS_CEO:
            return { loading: false, success: true, withdraw: action.payload };
        case WITHDRAW_FAIL_CEO:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion

//#region Export
export {
    withdrawListReducer,
    withdrawListAgentReducer,
    withdrawListAppSharerReducer,
    withdrawListKarrotReducer,
    withdrawListCeoReducer,

    withdrawAgentReducer,
    withdrawAppSharerReducer,
    withdrawKarrotReducer,
    withdrawCeoReducer
}

//#endregion