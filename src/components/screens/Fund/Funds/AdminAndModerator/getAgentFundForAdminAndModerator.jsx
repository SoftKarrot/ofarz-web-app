import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { useSelector, useDispatch } from 'react-redux';
import { fundAgent } from '../../../../../actions/Fund/fundActions';

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const FundAgentForAdminAndModeratorscreen = (props) => {

    const [agentPhoneNumber, setAgentPhoneNumber] = useState('');

    const fund = useSelector((state) => state.fundListAgent)
    const { funds } = fund;


    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fundAgent(agentPhoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = () => {

        dispatch(fundAgent(agentPhoneNumber))
    }

    const columns = [
        {
            dataField: "mainAccount",
            text: "MainAccount",
            sort: true,
            headerAlign: 'center',
            style: { backgroundColor: 'white' },
            alignItems: 'center'

        },
    ]
    return (

        <Container>
            {funds ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={funds}
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
                                                        placeholder="agentPhoneNumber"
                                                        size="lg"
                                                        value={agentPhoneNumber}
                                                        onChange={(e) => setAgentPhoneNumber(e.target.value)}
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

export default FundAgentForAdminAndModeratorscreen