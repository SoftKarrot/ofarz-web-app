import Axios from "axios";
import Cookie from 'js-cookie';
import { SHOPER_LOGOUT, SHOPER_REGISTER_FAIL, SHOPER_REGISTER_REQUEST, SHOPER_REGISTER_SUCCESS, SHOPER_SIGNIN_FAIL, SHOPER_SIGNIN_REQUEST, SHOPER_SIGNIN_SUCCESS, SHOPER_UPDATE_FAIL, SHOPER_UPDATE_REQUEST, SHOPER_UPDATE_SUCCESS } from "../../constants/Auth/shoperConstants";

const shoperUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { shoperSignin: { shoperInfo } } = getState();
    dispatch({ type: SHOPER_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + shoperInfo.token
            }
        });
        dispatch({ type: SHOPER_UPDATE_SUCCESS, payload: data });
        Cookie.set('shoperInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: SHOPER_UPDATE_FAIL, payload: error.message });
    }
}

const shoperSignin = (mobilenumber, password) => async (dispatch) => {

    dispatch({ type: SHOPER_SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post("/api/shoper/shopersignin", { mobilenumber, password });
        dispatch({ type: SHOPER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('shoperInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: SHOPER_SIGNIN_FAIL, payload: error.message });
    }
}



const shoperRegister = (firstname, lastname, mobilenumber, agentphonenumber, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: SHOPER_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, agentphonenumber, password, confirmpassword }
    });

    try {
        const { data } = await Axios.post("/api/shoper/shoperregistration", { firstname, lastname, mobilenumber, agentphonenumber, password, confirmpassword });

        dispatch({ type: SHOPER_REGISTER_SUCCESS, payload: data });
        Cookie.set('shoperInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: SHOPER_REGISTER_FAIL, payload: error.message });
    }
}


const shoperLogout = () => (dispatch) => {
    Cookie.remove("shoperInfo");
    dispatch({ type: SHOPER_LOGOUT })
}
export { shoperUpdate, shoperSignin, shoperRegister, shoperLogout };