//#region  Import
import {
    FUND_FAIL_AGENT,
    FUND_FAIL_APPSHARER,
    FUND_FAIL_CEO,
    FUND_FAIL_KARROT,

    FUND_LIST_FAIL_AGENT,
    FUND_LIST_FAIL_APPSHARER,
    FUND_LIST_FAIL_SHOPER,

    FUND_LIST_REQUEST_AGENT,
    FUND_LIST_REQUEST_APPSHARER,
    FUND_LIST_REQUEST_SHOPER,

    FUND_LIST_SUCCESS_AGENT,
    FUND_LIST_SUCCESS_APPSHARER,
    FUND_LIST_SUCCESS_SHOPER,

    FUND_REQUEST_AGENT,
    FUND_REQUEST_APPSHARER,
    FUND_REQUEST_CEO,
    FUND_REQUEST_KARROT,

    FUND_SUCCESS_AGENT,
    FUND_SUCCESS_APPSHARER,
    FUND_SUCCESS_CEO,
    FUND_SUCCESS_KARROT
} from "../../constants/Fund/fundConstants";
//#endregion
let initialState = {
    fund: false
}

//#region Fund List

function fundListAgentReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_AGENT:
            return { loading: true };
        case FUND_LIST_SUCCESS_AGENT:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function fundListAppSharerReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_APPSHARER:
            return { loading: true };
        case FUND_LIST_SUCCESS_APPSHARER:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function fundListShoperReducer(state = { funds: [] }, action) {
    switch (action.type) {
        case FUND_LIST_REQUEST_SHOPER:
            return { loading: true };
        case FUND_LIST_SUCCESS_SHOPER:
            return { loading: false, funds: action.payload };
        case FUND_LIST_FAIL_SHOPER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion

//#region Get One Fund
function fundAgentReducer(state = initialState, action) {

    switch (action.type) {
        case FUND_REQUEST_AGENT:
            return { loading: true };
        case FUND_SUCCESS_AGENT:
            return { loading: false, success: true, fund: action.payload };
        case FUND_FAIL_AGENT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function fundAppSharerReducer(state = initialState, action) {

    switch (action.type) {
        case FUND_REQUEST_APPSHARER:
            return { loading: true };
        case FUND_SUCCESS_APPSHARER:
            return { loading: false, success: true, fund: action.payload };
        case FUND_FAIL_APPSHARER:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function fundKarrotReducer(state = initialState, action) {

    switch (action.type) {
        case FUND_REQUEST_KARROT:
            return { loading: true };
        case FUND_SUCCESS_KARROT:
            return { loading: false, success: true, fund: action.payload };
        case FUND_FAIL_KARROT:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


function fundCeoReducer(state = initialState, action) {

    switch (action.type) {
        case FUND_REQUEST_CEO:
            return { loading: true };
        case FUND_SUCCESS_CEO:
            return { loading: false, success: true, fund: action.payload };
        case FUND_FAIL_CEO:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

//#endregion

//#region Export
export {

    fundListAgentReducer,
    fundListAppSharerReducer,
    fundListShoperReducer,

    fundAgentReducer,
    fundAppSharerReducer,
    fundKarrotReducer,
    fundCeoReducer
}

//#endregion