import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentTypes } from '../../../../../actions/Fund/paymentTypeActions';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';


function PaymentPromotionalProduct(props) {


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
                                <p>Promotional</p>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/submitpaymenttablecashpromotional`}>
                                        <Card>
                                            <h4>Table Cash (Promotional)</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/submitpaymentmainaccountpromotional`}>
                                        <Card>
                                            <h4>Main Account (Promotional)</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/submitpaymentbackshoppingpromotional`}>
                                        <Card>
                                            <h4>Back Shoping (Promotional)</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    )}
        </>
    );
}
export default PaymentPromotionalProduct;
