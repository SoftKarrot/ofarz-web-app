import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { listWithdrawAppSharer, listWithdrawAppSharerToAgent, listWithdrawCeoToAgent, listWithdrawKarrotToAgent } from '../../../../../actions/Fund/withdrawActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

const WithdrawListKarrotToAgentAdminAndModeratorScreen = (props) => {

    const [karrotPhoneNumber, setKarrotPhoneNumber] = useState('');

    const withdraw = useSelector((state) => state.withdrawListKarrotToAgent)
    const { withdraws } = withdraw;

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, []);


    const submitHandler = () => {

        dispatch(listWithdrawKarrotToAgent(karrotPhoneNumber))
    }

    const columns = [
        {
            dataField: "userPhoneNumber",
            text: "User Phone Number",
            sort: true,
        },
        {
            dataField: "agentPhnNumber",
            text: "Agent Phone Number",
            sort: true,
        },
        {
            dataField: "paymentTime",
            text: "Payment Time",
            sort: true,
            style: { 'width': '120px' }
        },
        {
            dataField: "amount",
            text: "Amount",
            sort: true,
        }
    ];

    return (

        <Container>
            {withdraws ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={withdraws}
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
                                                        value={karrotPhoneNumber}
                                                        onChange={(e) => setKarrotPhoneNumber(e.target.value)}
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

export default WithdrawListKarrotToAgentAdminAndModeratorScreen;
