import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducttypes } from '../../../../actions/Regular/productTypeActions';
import { Button, Card } from 'reactstrap';
import AgentSecondScreen from './agentSecondScreen';
import { Link } from 'react-router-dom';

function AgentFirstScreen(props) {

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
                        <ul className="products">
                            {productTypes.map((ptype) => (
                                <li key={ptype.id}>
                                    <div className="row">
                                        <div className="product-name">
                                            <Card>
                                                <Link to={'/agentcategories/' + ptype.id}>
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
export default AgentFirstScreen;
