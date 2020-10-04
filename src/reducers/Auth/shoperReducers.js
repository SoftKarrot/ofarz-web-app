import {
    SHOPER_LOGOUT,
    SHOPER_REGISTER_FAIL,
    SHOPER_REGISTER_REQUEST,
    SHOPER_REGISTER_SUCCESS,
    SHOPER_SIGNIN_FAIL,
    SHOPER_SIGNIN_REQUEST,
    SHOPER_SIGNIN_SUCCESS,

} from "../../constants/Auth/shoperConstants";

function shoperSigninReducer(state = {}, action) {
    switch (action.type) {
        case SHOPER_SIGNIN_REQUEST:
            return { loading: true };
        case SHOPER_SIGNIN_SUCCESS:
            return { loading: false, shoperInfo: action.payload };
        case SHOPER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case SHOPER_LOGOUT:
            return {};
        default: return state;
    }
}

function shoperRegistrationReducer(state = {}, action) {
    switch (action.type) {
        case SHOPER_REGISTER_REQUEST:
            return { loading: true };
        case SHOPER_REGISTER_SUCCESS:
            return { loading: false, shoperInfo: action.payload };
        case SHOPER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    shoperSigninReducer, shoperRegistrationReducer
}
