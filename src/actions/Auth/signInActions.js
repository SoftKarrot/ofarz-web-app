import axios from 'axios';
import Cookie from 'js-cookie';
import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL, LOGOUT
}
    from "../../constants/Auth/signInConstants";

const SignIn = (mobilenumber, password) => async (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await axios.post("/api/admin/signin", { mobilenumber, password });
        dispatch({ type: SIGNIN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: SIGNIN_FAIL, payload: error.message });
    }
}

const SignOut = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: LOGOUT })
}

export { SignIn, SignOut }