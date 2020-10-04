import {
    APPSHARER_LOGOUT,
    APPSHARER_REGISTER_FAIL,
    APPSHARER_REGISTER_REQUEST,
    APPSHARER_REGISTER_SUCCESS,
    APPSHARER_SIGNIN_FAIL,
    APPSHARER_SIGNIN_REQUEST,
    APPSHARER_SIGNIN_SUCCESS,
    APPSHARER_PROFILE_UPDATE_FAIL,
    APPSHARER_PROFILE_UPDATE_REQUEST,
    APPSHARER_PROFILE_UPDATE_SUCCESS
} from "../../constants/Auth/appSharerConstants";

function appSharerSigninReducer(state = {}, action) {
    switch (action.type) {
        case APPSHARER_SIGNIN_REQUEST:
            return { loading: true };
        case APPSHARER_SIGNIN_SUCCESS:
            return { loading: false, appSharerInfo: action.payload };
        case APPSHARER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case APPSHARER_LOGOUT:
            return {};
        default: return state;
    }
}

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
export {
    appSharerSigninReducer, appSharerAddDownlineReducer, appSharerUpdateReducer
}
