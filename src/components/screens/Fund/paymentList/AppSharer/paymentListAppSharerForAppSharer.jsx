import React, { useEffect } from 'react';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
import { Search } from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listPaymentsAppSharer } from '../../../../../actions/Fund/paymentActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const PaymentListAppSharerForAppSharerScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const paymentListAppSharer = useSelector((state) => state.paymentListAppSharer)
    const { payments } = paymentListAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPaymentsAppSharer(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



   
    //     {
    //         dataField: "link",
    //         text: "Action",
    //         formatter: (rowContent, row) => {
    //             return (
    //                 <div>
    //                     <Link to={"marketdetails/" + row.id}>
    //                         <Button color="dark" className="mr-2">
    //                             <FontAwesomeIcon icon={faInfo} /> Detail
    //                         </Button>
    //                     </Link>
    //                 </div>
    //             );
    //         },
    //     },


    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            {payments ? (
                <div>
                    {payments.map((pay) => (

                        <Card key={pay.id} style={{ color: "#fff", backgroundColor: "#0C373A" }} >
                            <Card.Body>
                                <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ backgroundColor: "#0C373A" }}>
                                        <div className="row">
                                            <div className="col-6"></div>
                                            <div className="col-6"></div>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

            ) : (
                    <h1>You dont hv any paymnt yet</h1>
                )}
        </div>
    );
};

export default PaymentListAppSharerForAppSharerScreen;
