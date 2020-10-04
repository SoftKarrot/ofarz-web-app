import axios from 'axios'
import {
    PAYMENTTYPE_DELETE_FAIL,
    PAYMENTTYPE_DELETE_REQUEST,
    PAYMENTTYPE_DELETE_SUCCESS,
    PAYMENTTYPE_DETAILS_FAIL,
    PAYMENTTYPE_DETAILS_REQUEST,
    PAYMENTTYPE_DETAILS_SUCCESS,
    PAYMENTTYPE_LIST_FAIL,
    PAYMENTTYPE_LIST_REQUEST,
    PAYMENTTYPE_LIST_SUCCESS,
    PAYMENTTYPE_SAVE_FAIL,
    PAYMENTTYPE_SAVE_REQUEST,
    PAYMENTTYPE_SAVE_SUCCESS,
    PAYMENTTYPE_UPDATE_REQUEST,
    PAYMENTTYPE_UPDATE_SUCCESS
} from '../../constants/Fund/paymentTypeConstants';

const listPaymentTypes = () => async (dispatch) => {
    try {
        dispatch({ type: PAYMENTTYPE_LIST_REQUEST });
        const { data } = await axios.get("/api/paymenttype");
        dispatch({ type: PAYMENTTYPE_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PAYMENTTYPE_LIST_FAIL, payload: error.message });
    }
}


const savePaymentType = (paymentType) => async (dispatch) => {
    try {
        dispatch({ type: PAYMENTTYPE_SAVE_REQUEST, payload: paymentType });
        const { data } = await axios.post('/api/paymenttype', paymentType)
        dispatch({ type: PAYMENTTYPE_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PAYMENTTYPE_SAVE_FAIL, payload: error.message });
    }
}

const updatePaymentType = (paymentType, paymentTypeId) => async (dispatch) => {

    try {
        dispatch({ type: PAYMENTTYPE_UPDATE_REQUEST, payload: paymentType });
        const { data } = await axios.put('/api/paymenttype/' + paymentTypeId, paymentType)
        dispatch({ type: PAYMENTTYPE_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PAYMENTTYPE_SAVE_FAIL, payload: error.message });
    }
}


const detailsPaymentType = (paymentTypeId) => async (dispatch) => {

    try {
        dispatch({ type: PAYMENTTYPE_DETAILS_REQUEST, payload: paymentTypeId });
        const { data } = await axios.get("/api/paymenttype/" + paymentTypeId)
        dispatch({ type: PAYMENTTYPE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PAYMENTTYPE_DETAILS_FAIL, payload: error.message })
    }
}


const deletePaymentType = (paymentTypeId) => async (dispatch, getState) => {
    debugger
    try {
        dispatch({ type: PAYMENTTYPE_DELETE_REQUEST, payload: paymentTypeId });
        const { data } = await axios.delete("/api/paymenttype/" + paymentTypeId)
        dispatch({ type: PAYMENTTYPE_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PAYMENTTYPE_DELETE_FAIL, payload: error.message });

    }
}

export { listPaymentTypes, detailsPaymentType, savePaymentType, updatePaymentType, deletePaymentType }


