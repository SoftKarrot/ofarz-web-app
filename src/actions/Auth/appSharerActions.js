import Axios from "axios";
import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { APPSHARER_LOGOUT, APPSHARER_REGISTER_FAIL, APPSHARER_REGISTER_REQUEST, APPSHARER_REGISTER_SUCCESS, APPSHARER_SIGNIN_FAIL, APPSHARER_SIGNIN_REQUEST, APPSHARER_SIGNIN_SUCCESS, APPSHARER_UPDATE_FAIL, APPSHARER_UPDATE_REQUEST, APPSHARER_UPDATE_SUCCESS } from "../../constants/Auth/appSharerConstants";

const appSharerUpdate = ({ userId, firstname, mobilenumber, password }) => async (dispatch, getState) => {
    const { appSharerSignin: { appSharerInfo } } = getState();
    dispatch({ type: APPSHARER_UPDATE_REQUEST, payload: { userId, firstname, mobilenumber, password } });
    try {
        const { data } = await Axios.put("/api/users/" + userId,
            { firstname, mobilenumber, password }, {
            headers: {
                Authorization: 'Bearer ' + appSharerInfo.token
            }
        });
        dispatch({ type: APPSHARER_UPDATE_SUCCESS, payload: data });
        Cookie.set('appSharerInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: APPSHARER_UPDATE_FAIL, payload: error.message });
    }
}

const appSharerSignin = (mobilenumber, password) => async (dispatch) => {

    dispatch({ type: APPSHARER_SIGNIN_REQUEST, payload: { mobilenumber, password } });
    try {
        const { data } = await Axios.post("/api/appsharer/login", { mobilenumber, password });
        dispatch({ type: APPSHARER_SIGNIN_SUCCESS, payload: data });
        Cookie.set('appSharerInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: APPSHARER_SIGNIN_FAIL, payload: error.message });
    }


    // Axios.post("api/appsharer/login", { mobilenumber, password }).then(res => {
    //     localStorage.setItem("token", JSON.stringify(res.data.access))
    //     let decoded = jwt_decode(localStorage.getItem("token"))
    //     localStorage.setItem('decoded', decoded)

    //     console.log(decoded)
    //     Cookie.set('appSharerInfo', JSON.stringify(decoded));

    // }).catch(e => {

    // })
}


// const appSharerSignin = (mobilenumber, password) => async (dispatch) => {

//     dispatch({ type: APPSHARER_SIGNIN_REQUEST, payload: { mobilenumber, password } });
//     debugger
//     try {
//         await Axios.post("/api/appsharer/login", { mobilenumber, password })
//             .then(res => {
//                 const token = res.data.token;
//                 const appSharer = jwt(token);
//                 localStorage.setItem('token', token);
//                 dispatch({ type: APPSHARER_SIGNIN_SUCCESS, payload: appSharer });
//                 Cookie.set('appSharerInfo', JSON.stringify(appSharer));
//             });


//     } catch (error) {
//         dispatch({ type: APPSHARER_SIGNIN_FAIL, payload: error.message });
//     }
// }


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


const appSharerLogout = () => (dispatch) => {
    Cookie.remove("appSharerInfo");
    dispatch({ type: APPSHARER_LOGOUT })
}
export { appSharerUpdate, appSharerSignin, appSharerRegister, appSharerLogout };