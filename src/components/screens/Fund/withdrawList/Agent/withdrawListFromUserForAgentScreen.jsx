import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner, Label, Input, Form, FormGroup } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { useSelector, useDispatch } from 'react-redux';
import { listWithdrawAgentFromUser, listWithdrawAgentToOfarz } from '../../../../../actions/Fund/withdrawActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const WithdrawListAgentFromUserForAgentScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const withdrawListAgentFromUser = useSelector((state) => state.withdrawListAgentFromUser)
    const { withdraws } = withdrawListAgentFromUser;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listWithdrawAgentFromUser(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);



    const columns = [
        {
            dataField: "userName",
            text: "Payer Name",
            sort: true,
        },
        {
            dataField: "userPhoneNumber",
            text: "Payer Phone Number",
            sort: true,
        },
        {
            dataField: "user.applicationRole.name",
            text: "User",
            sort: true,
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

export default WithdrawListAgentFromUserForAgentScreen;
