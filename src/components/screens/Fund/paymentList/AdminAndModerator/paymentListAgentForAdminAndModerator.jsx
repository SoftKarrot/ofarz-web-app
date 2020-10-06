import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faEdit,
    faTrash,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { listPayments, listPaymentsAgent } from '../../../../../actions/Fund/paymentActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const PaymentListFullForAdminScreen = (props) => {

    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const paymentListAgent = useSelector((state) => state.paymentListAgent)
    const { payments } = paymentListAgent;

    const dispatch = useDispatch();

    useEffect(() => {

        

        return () => {
            //
        };
    }, []);


    const submitHandler = () => {

        dispatch(listPaymentsAgent(agentPhnNumber))
    }

    const columns = [
        {
            dataField: "id",
            text: "Id",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"marketdetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Detail
                            </Button>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (

        <Container>
            {payments ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={payments}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <div className="float-right">
                                        <Form onSubmit={submitHandler}>
                                            <div className="col col-lg-6">
                                                <FormGroup>
                                                    <Label for="name">Name</Label>
                                                    <Input type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Enter Product Name"
                                                        size="lg"
                                                        value={agentPhnNumber}
                                                        onChange={(e) => setAgentPhnNumber(e.target.value)}
                                                    />
                                                </FormGroup>
                                            </div>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                            />
                        </div>
                    )}
                </ToolkitProvider>
            ) : (
                    <div className="text-center">
                        {props.errorCategoriesList ? (
                            <h4>{props.errorCategoriesList}</h4>
                        ) : (
                                <Spinner color="dark" />
                            )}
                    </div>
                )}
        </Container>
    );
};

export default PaymentListFullForAdminScreen;
