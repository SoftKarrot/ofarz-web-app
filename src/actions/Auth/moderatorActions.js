import Axios from "axios";
import Cookie from 'js-cookie';
import { MODERATOR_LOGOUT, MODERATOR_ADD_FAIL, MODERATOR_ADD_REQUEST, MODERATOR_ADD_SUCCESS, MODERATOR_SIGNIN_FAIL, MODERATOR_SIGNIN_REQUEST, MODERATOR_SIGNIN_SUCCESS, MODERATOR_UPDATE_FAIL, MODERATOR_UPDATE_REQUEST, MODERATOR_UPDATE_SUCCESS } from "../../constants/Auth/moderatorConstants";

const moderatorUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { moderatorSignin: { moderatorInfo } } = getState();
    dispatch({ type: MODERATOR_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + moderatorInfo.token
            }
        });
        dispatch({ type: MODERATOR_UPDATE_SUCCESS, payload: data });
        Cookie.set('moderatorInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: MODERATOR_UPDATE_FAIL, payload: error.message });
    }
}

const moderatorSignin = (mobilenumber, password) => async (dispatch) => {

    dispatch({ type: MODERATOR_SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post("/api/moderator/moderatorsignin", { mobilenumber, password });
        dispatch({ type: MODERATOR_SIGNIN_SUCCESS, payload: data });
        Cookie.set('moderatorInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: MODERATOR_SIGNIN_FAIL, payload: error.message });
    }
}



const  moderatorAdd= (firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, password, confirmpassword) => async (dispatch) => {

    dispatch({
        type: MODERATOR_ADD_REQUEST, payload: { firstname, lastname, mobilenumber, nid_number, profilephoto, postalcode, password, confirmpassword }
    });

    try {
        const { data } = await Axios.post("/api/moderator/addmoderator", { firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, password, confirmpassword });

        dispatch({ type: MODERATOR_ADD_SUCCESS, payload: data });
        Cookie.set('moderatorInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: MODERATOR_ADD_FAIL, payload: error.message });
    }
}


const moderatorLogout = () => (dispatch) => {
    Cookie.remove("moderatorInfo");
    dispatch({ type: MODERATOR_LOGOUT })
}
export { moderatorUpdate, moderatorSignin, moderatorAdd, moderatorLogout };