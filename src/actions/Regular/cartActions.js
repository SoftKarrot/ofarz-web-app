import Axios from "axios";
import Cookie from "js-cookie";
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING,
    CART_SAVE_PAYMENT
} from "../../constants/Regular/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {

        const { data } = await Axios.get("/api/products/GetOneAsync/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                id: data.id,
                name: data.name,
                imageUrl: data.imageUrl,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {

    }
}
const removeFromCart = (productId) => (dispatch, getState) => {

    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    const { cart: { cartItems } } = getState();
    debugger
    Cookie.set("cartItems", JSON.stringify(cartItems));

}
const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data });
}

const savePayment = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data });
}
export { addToCart, removeFromCart, saveShipping, savePayment }