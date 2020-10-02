import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCategories } from '../../../../actions/Regular/categoryActions';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';


function AgentSecondScreen(props) {

    const ptype = props.match.params.id;
    const categoryList = useSelector((state) => state.categoryList);
    const { categories, loading, error } = categoryList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategories());
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
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <div className="row">
                                        <div className="product-name">                              
                                            <Link to={`/agentproductsscreen/${ptype}` +`,`+category.id}>
                                                <Card>
                                                    {category.name} 
                                                </Card>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
        </>
    );
}
export default AgentSecondScreen;
