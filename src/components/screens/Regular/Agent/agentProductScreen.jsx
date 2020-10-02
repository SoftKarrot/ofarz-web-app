import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsByProductTypeCategory } from '../../../../actions/Regular/productActions';

function AgentProductsScreen(props) {

    const productType = props.match.params.ptype ? props.match.params.ptype : '';
    const category = props.match.params.id ? props.match.params.id : '';

    const productListByProductTypeCategory = useSelector((state) => state.productListByProductTypeCategory);
    const { products, loading, error } = productListByProductTypeCategory;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsByProductTypeCategory(productType, category));
        return () => {
            //
        };
    }, [productType, category]);
    
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                        <ul className="products">
                            {products.map((product) => (
                                <li key={product.id}>
                                    <div className="product">
                                        <Link to={'/productdetails/' + product.id}>
                                            <img
                                                className="product-image"
                                                src={product.imageUrl}
                                                alt="product"
                                            />
                                        </Link>
                                        <div className="product-name">
                                            <Link to={'/product/' + product.id}>{product.name}</Link>
                                        </div>
                                        <div className="product-brand">{product.category.name}</div>
                                        <div className="product-brand">{product.productType.name}</div>
                                        <div className="product-brand">{product.countInStock}</div>
                                        <div className="product-price">${product.price}</div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
        </>
    );
}
export default AgentProductsScreen;
