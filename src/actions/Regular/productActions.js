import axios from 'axios'
import {
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_FAIL,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_REQUEST,
    PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_SAVE_FAIL,
    PRODUCT_SAVE_REQUEST,
    PRODUCT_SAVE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS
} from '../../constants/Regular/productConstants';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products/GetAllAsync");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const listProductsByProductTypeCategory = (productTypeId, categoryId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_REQUEST });
        const { data } = await axios.get("/api/products/getproductsbyproducttypeandcategory/" + productTypeId + "/" + categoryId);
        dispatch({ type: PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_PRODUCTTYPE_CATEGORY_AGENT_FAIL, payload: error.message });
    }
}


const saveProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { data } = await axios.post('/api/products/postasync', product)
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const updateProduct = (product, productId) => async (dispatch) => {
 
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
        const { data } = await axios.put('/api/products/putasync/' + productId, product)
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    //debugger
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get("/api/products/getoneasync/" + productId)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}

const deleteProduct = (productId) => async (dispatch, getState) => {
    debugger
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await axios.delete("/api/products/deleteasync/" + productId)
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });

    }
}

export { listProducts, listProductsByProductTypeCategory, detailsProduct, saveProduct, updateProduct, deleteProduct }


