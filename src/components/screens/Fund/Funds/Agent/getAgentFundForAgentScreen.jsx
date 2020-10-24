import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo
} from "@fortawesome/free-solid-svg-icons";
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


const FundAgentForAgentscreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;


    const fund = useSelector((state) => state.fundListAgent)
    const { funds } = fund;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAgent(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



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

export default FundAgentForAgentscreen