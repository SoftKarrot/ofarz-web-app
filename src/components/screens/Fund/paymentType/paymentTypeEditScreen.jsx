import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { detailsPaymentType, updatePaymentType } from '../../../../actions/Fund/paymentTypeActions';

function PaymentTypeEditScreen(props) {

    const paymentTypeId = props.match.params.id;
    const [paymentTypeName, setName] = useState('');
    const [paymentTypeDescription, setDescription] = useState('');


    const paymentTypeDetails = useSelector((state) => state.paymentTypeDetails);
    const { paymentType } = paymentTypeDetails;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsPaymentType(paymentTypeId));

        setName(paymentType.paymentTypeName)
        setDescription(paymentType.paymentTypeDescription)


        return () => {

            //
        };
    }, [paymentTypeId]);

    function submitHandler() {

        dispatch(
            updatePaymentType({
                paymentTypeName,
                paymentTypeDescription,
            }, paymentTypeId)
        );
    };

    return (
        <div className="container">
            {paymentType && (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="paymentTypeName">Name</Label>
                                <Input type="text"
                                    name="paymentTypeName"
                                    id="paymentTypeName"
                                    size="lg"
                                    value={paymentTypeName}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="paymentTypeDescription">Discription</Label>
                                <Input type="text"
                                    name="paymentTypeDescription"
                                    id="paymentTypeDescription"
                                    size="lg"
                                    value={paymentTypeDescription}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            )
            }
        </div>
    );
}
export default PaymentTypeEditScreen;
