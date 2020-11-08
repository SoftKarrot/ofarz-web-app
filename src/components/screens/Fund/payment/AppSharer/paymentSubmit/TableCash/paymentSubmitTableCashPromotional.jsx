import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitPaymentTableCashPromotional } from '../../../../../../../actions/Fund/paymentActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';

function PaymentTableCashPromotional(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const payerId = userInfo.item1.id;
        dispatch(submitPaymentTableCashPromotional(amount, agentPhnNumber, payerId));

    }
    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <Card style={{ padding: "10px", borderColor: "#5cb85c" }}>
                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#5cb85c" }}>
                                        Table Cash -- Promotional Product
                                    </Card>
                                    <br />
                                    <br />

                                    <Form
                                        onSubmit={submitHandler}
                                    >
                                        <div
                                            style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                                        >
                                            <FormGroup >
                                                <Label
                                                    for="name"
                                                    style={{ color: "#5cb85c" }}
                                                >
                                                    Amount
                                                </Label>
                                                <Input
                                                    style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Amount"
                                                    size="lg"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup >
                                                <Label
                                                    for="password"
                                                    style={{ color: "#5cb85c" }}
                                                >
                                                    Agent PhoneNumber
                                                </Label>
                                                <Input
                                                    style={{ color: "#5cb85c", backgroundColor: "#fff" }}
                                                    type="text"
                                                    name="name"
                                                    color="06E2FF"
                                                    placeholder="Enter Agent Phone Number"
                                                    size="lg"
                                                    value={agentPhnNumber}
                                                    onChange={(e) => setAgentPhnNumber(e.target.value)}
                                                />
                                            </FormGroup>
                                        </div>
                                        <Button
                                            style={{
                                                color: "#06E2FF",
                                            }}
                                            outline color="success" size="lg" block type="submit">
                                            Payment
                                        </Button>
                                    </Form>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>)
}
export default PaymentTableCashPromotional;