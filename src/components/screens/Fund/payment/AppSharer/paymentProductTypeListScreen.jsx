import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducttypes } from '../../../../../actions/Regular/productTypeActions';
import { Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

function PaymentProductTypeScreen(props) {

    const productTypeList = useSelector((state) => state.productTypeList);
    const { productTypes, loading, error } = productTypeList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducttypes());

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
                                Product Type
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/paymentofferproduct`}>
                                        <Card>
                                            <h4>Offer</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <Link to={`/paymentpromotionalproduct`}>
                                        <Card>
                                            <h4>Promotional</h4>
                                        </Card>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    )}
        </>
    );
}
export default PaymentProductTypeScreen;
