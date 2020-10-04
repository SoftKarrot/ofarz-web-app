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
                            {productTypes.map((ptype) => (
                                <li key={ptype.id}>
                                    <div className="row">
                                        <div className="product-name">
                                            <Card>
                                                <Link to={'/paymenttypesforpay'}>
                                                    {ptype.name}
                                                </Link>
                                            </Card>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
        </>
    );
}
export default PaymentProductTypeScreen;
