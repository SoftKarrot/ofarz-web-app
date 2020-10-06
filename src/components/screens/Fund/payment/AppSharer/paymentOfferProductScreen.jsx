import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentTypes } from '../../../../../actions/Fund/paymentTypeActions';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';


function PaymentOfferProduct(props) {


    const paymentTypeList = useSelector((state) => state.paymentTypeList);
    const { paymentTypes, loading, error } = paymentTypeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentTypes());
        return () => {
            //
        };
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                        <ul>
                            <li>
                                <p>Offer</p>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/submitpaymenttablecashoffer`}>
                                        <Card>
                                            <h4>Table Cash (Offer)</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/submitpaymentmainaccountoffer`}>
                                        <Card>
                                            <h4>Main Account (Offer)</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/submitpaymentbackshoppingoffer`}>
                                        <Card>
                                            <h4>Back Shoping (Offer)</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    )}
        </>
    );
}
export default PaymentOfferProduct;