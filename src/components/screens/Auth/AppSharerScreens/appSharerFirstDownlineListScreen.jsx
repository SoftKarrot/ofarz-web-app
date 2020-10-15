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

import { appSharerFirstDownlineList } from '../../../../actions/Auth/appSharerActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const FirstDownlineListForAppSharerScreen = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const appSharersGetFirstDownlineList = useSelector((state) => state.appSharerGetFirstDownlineList)
    const { downlines } = appSharersGetFirstDownlineList;

    const dispatch = useDispatch();

    useEffect(() => {


        dispatch(appSharerFirstDownlineList(userInfo.item1.id))

        return () => {
            //
        };
    }, [userInfo.item1.id]);



    const columns = [
        {
            dataField: "firstName",
            text: "FirstName",
            sort: true,
        },
        {
            dataField: "lastName",
            text: "Last Name",
            sort: true,
        },
        {
            dataField: "phoneNumber",
            text: "Phone Number",
            sort: true,
        },
        {
            dataField: "reffrer.phoneNumber",
            text: "Reffer Phone Number",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"appsharerseconddownlinelist/" + row.id}>
                            <Button color="primary" className="mr-2">
                                <FontAwesomeIcon icon={faInfo} /> Downline
                            </Button>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            <h1>First Downline</h1>
            <Container>
                {downlines ? (
                    <ToolkitProvider
                        bootstrap4
                        keyField="id"
                        data={downlines}
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
        </div>

    );
};

export default FirstDownlineListForAppSharerScreen;
