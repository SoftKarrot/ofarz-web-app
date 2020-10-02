import Axios from "axios";
import Cookie from 'js-cookie';
import {
    ADMIN_LOGOUT,
    ADMIN_PASSWORD_UPDATE_FAIL,
    ADMIN_PASSWORD_UPDATE_REQUEST,
    ADMIN_PASSWORD_UPDATE_SUCCESS,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_SIGNIN_FAIL,
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
    ADMIN_PROFILE_UPDATE_FAIL,
    ADMIN_PROFILE_UPDATE_REQUEST,
    ADMIN_PROFILE_UPDATE_SUCCESS,
    ADMIN_PROFILE_DETAILS_REQUEST,
    ADMIN_PROFILE_DETAILS_SUCCESS,
    ADMIN_PROFILE_DETAILS_FAIL
} from "../../constants/Auth/adminConstants";
const adminUpdate = (currentuser, firstname, lastname, profilephoto, email, mobilenumber) => async (dispatch, getState) => {
    const { adminSignin: { adminInfo } } = getState();
    dispatch({
        type: ADMIN_PROFILE_UPDATE_REQUEST, payload: { currentuser, firstname, lastname, profilephoto, email, mobilenumber }
    });
    try {
        const { data } = await Axios.put("/api/admin/adminprofileUpdate",
            { currentuser, firstname, lastname, profilephoto, email, mobilenumber }, {
            headers: {
                Authorization: 'Bearer ' + adminInfo.token
            }
        });
        dispatch({ type: ADMIN_PROFILE_UPDATE_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_PROFILE_UPDATE_FAIL, payload: error.message });
    }
}
const adminPasswordUpdate = (currentuserId, currentPassword, newPassword, confirmPassword) => async (dispatch, getState) => {
    const { adminSignin: { adminInfo } } = getState();
    dispatch({
        type: ADMIN_PASSWORD_UPDATE_REQUEST, payload: { currentuserId, currentPassword, newPassword, confirmPassword }
    });
    try {
        const { data } = await Axios.put("/api/admin/changepassword",
            { currentuserId, currentPassword, newPassword, confirmPassword }, {
            headers: {
                Authorization: 'Bearer ' + adminInfo.token
            }
        });
        dispatch({ type: ADMIN_PASSWORD_UPDATE_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_PASSWORD_UPDATE_FAIL, payload: error.message });
    }
}


const adminProfileDetail = (currentuserId) => async (dispatch, getState) => {

    try {
        dispatch({ type: ADMIN_PROFILE_DETAILS_REQUEST, payload: currentuserId });
        const { data } = await Axios.get("/api/admin/adminprofile/" + currentuserId );
        dispatch({ type: ADMIN_PROFILE_DETAILS_SUCCESS, payload: data });
        Cookie.set('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: ADMIN_PROFILE_DETAILS_FAIL, payload: error.message });
    }
}
// const detailsProduct = (productId) => async (dispatch) => {
//     //debugger
//     try {
//         dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
//         const { data } = await axios.get("/api/products/getoneasync/" + productId)
//         dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
//     }
//     catch (error) {
//         dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
//     }
// }


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
const adminRegister = (firstname, lastname, mobilenumber, nid_number, email, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword) => async (dispatch, getState) => {
    
    dispatch({
        type: ADMIN_REGISTER_REQUEST, payload: { firstname, lastname, mobilenumber, nid_number, email, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword }
    });
    try {
        const { data } = await Axios.post("/api/admin/adminregistration", { firstname, lastname, mobilenumber, nid_number, email, postalcode, profilephoto, countryId, divisionId, districtId, upozilaId, unionOrWardId, password, confirmpassword });
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
export { adminUpdate, adminSignin, adminRegister, adminLogout, adminPasswordUpdate, adminProfileDetail };