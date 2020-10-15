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
import { listPaymentsAppSharer } from '../../../../../actions/Fund/paymentActions';
import { fundAppSharers } from '../../../../../actions/Fund/fundActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const FundAppSharerForAppSharerScreen = (props) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const fundListAppSharer = useSelector((state) => state.fundListAppSharer)
    const { funds } = fundListAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAppSharers(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    const columns = [
        {
            dataField: "sharerName",
            text: "SharerName",
            sort: true,
        },
        {
            dataField: "sharerPhoneNumber",
            text: "Phone Number",
            sort: true,
        },
        {
            dataField: "mainAccount",
            text: "MainAccount",
            sort: true,
        },
        {
            dataField: "backShoppingAccount",
            text: "BackShoppingAccount",
            sort: true,
        },
    ];

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

export default FundAppSharerForAppSharerScreen;
