import Axios from "axios";
import Cookie from 'js-cookie';
import { ADMIN_LOGOUT, ADMIN_REGISTER_FAIL, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_SIGNIN_FAIL, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_UPDATE_FAIL, ADMIN_UPDATE_REQUEST, ADMIN_UPDATE_SUCCESS } from "../../constants/Auth/adminConstants";

const adminUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { adminSignin: { adminInfo } } = getState();
    dispatch({ type: ADMIN_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + adminInfo.token
            }
        });
        dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_UPDATE_FAIL, payload: error.message });
    }
}

const adminSignin = (mobilenumber, password) => async (dispatch) => {

    dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post("/api/admin/adminsignin", { mobilenumber, password });
        dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_SIGNIN_FAIL, payload: error.message });
    }
}



const adminRegister = (firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword) => async (dispatch, getState) => {
    debugger

    dispatch({
        type: ADMIN_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword }
    });


    try {
        const { data } = await Axios.post("/api/admin/adminregistration", { firstname, lastname, mobilenumber, nid_number, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword });

        dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_REGISTER_FAIL, payload: error.message });
    }
}


const adminLogout = () => (dispatch) => {
    Cookie.remove("adminInfo");
    dispatch({ type: ADMIN_LOGOUT })
}
export { adminUpdate, adminSignin, adminRegister, adminLogout };