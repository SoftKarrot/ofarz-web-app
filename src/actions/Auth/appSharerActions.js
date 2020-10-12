import axios from "axios";
import Cookie from 'js-cookie';
import {

    APPSHARER_REGISTER_FAIL,
    APPSHARER_REGISTER_REQUEST,
    APPSHARER_REGISTER_SUCCESS,

    APPSHARER_PROFILE_UPDATE_FAIL,
    APPSHARER_PROFILE_UPDATE_REQUEST,
    APPSHARER_PROFILE_UPDATE_SUCCESS, APPSHARER_PROFILE_DETAILS_REQUEST, APPSHARER_PROFILE_DETAILS_SUCCESS, APPSHARER_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/appSharerConstants";

const appSharerUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    dispatch({ type: APPSHARER_PROFILE_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: APPSHARER_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: APPSHARER_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}

const appSharerRegister = (firstname, mobilenumber, currentuser, password, confirmpassword) => async (dispatch, getState) => {
    //debugger
    const { userSignIn: { userInfo } } = getState();

    dispatch({
        type: APPSHARER_REGISTER_REQUEST, payload: { firstname, mobilenumber, currentuser, password, confirmpassword }
    });

    //debugger
    try {
        const { data } = await axios.post("/api/appsharer/adddownline", { firstname, mobilenumber, currentuser, password, confirmpassword }, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item3
            }
        });
        debugger
        Cookie.set('userInfo', JSON.stringify(data));
        dispatch({ type: APPSHARER_REGISTER_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: APPSHARER_REGISTER_FAIL, payload: error.message });
    }
}



const appSharerProfileDetail = (currentUserId) => async (dispatch, getState) => {
    const { userSignIn: { userInfo } } = getState();
    try {
        dispatch({ type: APPSHARER_PROFILE_DETAILS_REQUEST, payload: currentUserId });
        const { data } = await axios.get("/api/appsharer/GetProfileDetails/" + currentUserId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.item3
            }
        });
        Cookie.set('userInfo', JSON.stringify(userInfo));

        dispatch({ type: APPSHARER_PROFILE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: APPSHARER_PROFILE_DETAILS_FAIL, payload: error.message })
    }
}



export { appSharerUpdate, appSharerRegister, appSharerProfileDetail };