import Axios from "axios";
import Cookie from 'js-cookie';
import {

    APPSHARER_REGISTER_FAIL,
    APPSHARER_REGISTER_REQUEST,
    APPSHARER_REGISTER_SUCCESS,

    APPSHARER_PROFILE_UPDATE_FAIL,
    APPSHARER_PROFILE_UPDATE_REQUEST,
    APPSHARER_PROFILE_UPDATE_SUCCESS
} from "../../constants/Auth/appSharerConstants";

const appSharerUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { appSharerSignin: { appSharerInfo } } = getState();
    dispatch({ type: APPSHARER_PROFILE_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + appSharerInfo.token
            }
        });
        dispatch({ type: APPSHARER_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('appSharerInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: APPSHARER_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}

const appSharerRegister = (firstname, mobilenumber, currentuser, password, confirmpassword) => async (dispatch, getState) => {
    //debugger
    const { appSharerSignin: { appSharerInfo } } = getState();

    dispatch({
        type: APPSHARER_REGISTER_REQUEST, payload: { firstname, mobilenumber, currentuser, password, confirmpassword }
    });

    //debugger
    try {
        const { data } = await Axios.post("/api/appsharer/adddownline", { firstname, mobilenumber, currentuser, password, confirmpassword }, {
            headers: {
                Authorization: 'Bearer ' + appSharerInfo.token
            }
        });
        debugger
        dispatch({ type: APPSHARER_REGISTER_SUCCESS, payload: data });
        Cookie.set('appSharerInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: APPSHARER_REGISTER_FAIL, payload: error.message });
    }
}



export { appSharerUpdate, appSharerRegister };