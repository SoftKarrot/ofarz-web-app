import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fundAgent } from '../../../actions/Fund/fundActions';

import { createOrder } from '../../../actions/Regular/orderActions';

function PlaceOrderScreen(props) {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const funds = useSelector((state) => state.fundAgent)
    const { fund } = funds;


    const cart = useSelector(state => state.cart);
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const { cartItems, shipping, payment } = cart;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);


    const dispatch = useDispatch();

    const placeOrderHandler = () => {
        dispatch(createOrder(userInfo.item1.id, itemsPrice, cartItems));
    }
    useEffect(() => {
        dispatch(fundAgent(userInfo.item1.phoneNumber))
        //console.log("UseEffect", funds.mainAccount)
        if (success) {
            props.history.push("/");
        }

    }, [success]);

    return (
        <div>

            {/* {console.log("Return", funds.mainAccount)} */}

            Shipping Address set 

            
            { funds && (
                <div>

                    <div className="placeorder">
                        <div className="placeorder-info">

                            <div>
                                <ul className="cart-list-container">
                                    <li>
                                        <h3>
                                            Shopping Cart
                            </h3>
                                        <div>
                                            Price
                            </div>
                                    </li>
                                    {
                                        cartItems.length === 0 ?
                                            <div>
                                                Cart is empty
          </div>
                                            :
                                            cartItems.map(item =>
                                                <li>
                                                    <div className="cart-image">
                                                        <img src={item.imageUrl} alt="product" />
                                                    </div>
                                                    <div className="cart-name">
                                                        <div>
                                                            <Link to={"/product/" + item.id}>
                                                                {item.name}
                                                            </Link>

                                                        </div>
                                                        <div>
                                                            Qty: {item.qty}
                                                        </div>
                                                    </div>
                                                    <div className="cart-price">
                                                        ${item.price}
                                                    </div>
                                                </li>
                                            )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="placeorder-action">
                            <ul>
                                <li>
                                    <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button>
                                </li>
                                <li>
                                    <h3>Order Summary</h3>
                                </li>
                                <li>
                                    <div>Items</div>
                                    <div>${itemsPrice}</div>
                                </li>
                                <li>
                                    <div>
                                        {fund.mainAccount}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlaceOrderScreen;