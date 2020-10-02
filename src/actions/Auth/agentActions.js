import Axios from "axios";
import Cookie from 'js-cookie';
import { AGENT_LOGOUT, AGENT_REGISTER_FAIL, AGENT_REGISTER_REQUEST, AGENT_REGISTER_SUCCESS, AGENT_SIGNIN_FAIL, AGENT_SIGNIN_REQUEST, AGENT_SIGNIN_SUCCESS, AGENT_UPDATE_FAIL, AGENT_UPDATE_REQUEST, AGENT_UPDATE_SUCCESS } from "../../constants/Auth/agentConstants";

const agentUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { agentSignin: { agentInfo } } = getState();
    dispatch({ type: AGENT_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + agentInfo.token
            }
        });
        dispatch({ type: AGENT_UPDATE_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: AGENT_UPDATE_FAIL, payload: error.message });
    }
}

const agentSignin = (mobilenumber, password) => async (dispatch) => {

    dispatch({ type: AGENT_SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post("/api/agent/agentsignin", { mobilenumber, password });
        dispatch({ type: AGENT_SIGNIN_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: AGENT_SIGNIN_FAIL, payload: error.message });
    }
}



const agentRegister = (firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: AGENT_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, nid_number, profilephoto, postalcode, password, confirmpassword }
    });

    try {
        const { data } = await Axios.post("/api/agent/addagent", { firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, password, confirmpassword });

        dispatch({ type: AGENT_REGISTER_SUCCESS, payload: data });
        Cookie.set('agentInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: AGENT_REGISTER_FAIL, payload: error.message });
    }
}


const agentLogout = () => (dispatch) => {
    Cookie.remove("agentInfo");
    dispatch({ type: AGENT_LOGOUT })
}
export { agentUpdate, agentSignin, agentRegister, agentLogout };