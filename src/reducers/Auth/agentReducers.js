import {

    AGENT_REGISTER_FAIL,
    AGENT_REGISTER_REQUEST,
    AGENT_REGISTER_SUCCESS,

    AGENT_PROFILE_UPDATE_FAIL,
    AGENT_PROFILE_UPDATE_REQUEST,
    AGENT_PROFILE_UPDATE_SUCCESS
} from "../../constants/Auth/agentConstants";



function agentUpdateReducer(state = {}, action) {
    switch (action.type) {
        case AGENT_PROFILE_UPDATE_REQUEST:
            return { loading: true };
        case AGENT_PROFILE_UPDATE_SUCCESS:
            return { loading: false, agentInfo: action.payload };
        case AGENT_PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

function agentAddReducer(state = {}, action) {
    switch (action.type) {
        case AGENT_REGISTER_REQUEST:
            return { loading: true };
        case AGENT_REGISTER_SUCCESS:
            return { loading: false, agentInfo: action.payload };
        case AGENT_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}
export {
    agentAddReducer, agentUpdateReducer
}
