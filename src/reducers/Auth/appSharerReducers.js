import {

    APPSHARER_REGISTER_FAIL,
    APPSHARER_REGISTER_REQUEST,
    APPSHARER_REGISTER_SUCCESS,

    APPSHARER_PROFILE_UPDATE_FAIL,
    APPSHARER_PROFILE_UPDATE_REQUEST,
    APPSHARER_PROFILE_UPDATE_SUCCESS, APPSHARER_PROFILE_DETAILS_SUCCESS, APPSHARER_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/appSharerConstants";


function appSharerUpdateReducer(state = {}, action) {
    switch (action.type) {
        case APPSHARER_PROFILE_UPDATE_REQUEST:
            return { loading: true };
        case APPSHARER_PROFILE_UPDATE_SUCCESS:
            return { loading: false, appSharerInfo: action.payload };
        case APPSHARER_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function appSharerAddDownlineReducer(state = {}, action) {
    switch (action.type) {
        case APPSHARER_REGISTER_REQUEST:
            return { loading: true };
        case APPSHARER_REGISTER_SUCCESS:
            return { loading: false, appSharerInfo: action.payload };
        case APPSHARER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}


function appSharerProfileDetailsReducer(state = {}, action) {
    switch (action.type) {
        case APPSHARER_PROFILE_DETAILS_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case APPSHARER_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export {
    appSharerAddDownlineReducer, appSharerUpdateReducer , appSharerProfileDetailsReducer
}
