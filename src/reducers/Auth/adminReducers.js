import {
    ADMIN_LOGOUT,
    ADMIN_PASSWORD_UPDATE_FAIL,
    ADMIN_PASSWORD_UPDATE_SUCCESS,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_SIGNIN_FAIL,
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_PROFILE_UPDATE_FAIL,
    ADMIN_PROFILE_UPDATE_SUCCESS,
    ADMIN_PROFILE_DETAILS_SUCCESS,
    ADMIN_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/adminConstants";

function adminSigninReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_SIGNIN_REQUEST:
            return { loading: true };
        case ADMIN_SIGNIN_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case ADMIN_LOGOUT:
            return {};
        default: return state;
    }
}

function adminUpdateReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_PROFILE_UPDATE_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function adminProfileDetailsReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_PROFILE_DETAILS_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function adminUpdatePasswordReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_PASSWORD_UPDATE_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_PASSWORD_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function adminRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case ADMIN_REGISTER_REQUEST:
            return { loading: true };
        case ADMIN_REGISTER_SUCCESS:
            return { loading: false, adminInfo: action.payload };
        case ADMIN_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    adminSigninReducer, adminRegistrationReducer, adminUpdateReducer, adminUpdatePasswordReducer, adminProfileDetailsReducer
}
