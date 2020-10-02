import { MODERATOR_LOGOUT, MODERATOR_ADD_FAIL, MODERATOR_ADD_REQUEST, MODERATOR_ADD_SUCCESS, MODERATOR_SIGNIN_FAIL, MODERATOR_SIGNIN_REQUEST, MODERATOR_SIGNIN_SUCCESS, MODERATOR_UPDATE_FAIL, MODERATOR_UPDATE_REQUEST, MODERATOR_UPDATE_SUCCESS } from "../../constants/Auth/moderatorConstants";

function moderatorSigninReducer(state = {}, action) {
    switch (action.type) {
        case MODERATOR_SIGNIN_REQUEST:
            return { loading: true };
        case MODERATOR_SIGNIN_SUCCESS:
            return { loading: false, moderatorInfo: action.payload };
        case MODERATOR_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case MODERATOR_LOGOUT:
            return {};
        default: return state;
    }
}

function moderatorUpdateReducer(state = {}, action) {
    switch (action.type) {
        case MODERATOR_UPDATE_REQUEST:
            return { loading: true };
        case MODERATOR_UPDATE_SUCCESS:
            return { loading: false, moderatorInfo: action.payload };
        case MODERATOR_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function moderatorAddReducer(state = {}, action) {
    switch (action.type) {
        case MODERATOR_ADD_REQUEST:
            return { loading: true };
        case MODERATOR_ADD_SUCCESS:
            return { loading: false, moderatorInfo: action.payload };
        case MODERATOR_ADD_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    moderatorSigninReducer, moderatorAddReducer, moderatorUpdateReducer
}
