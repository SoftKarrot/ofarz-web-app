import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { SignOut } from "../../actions/Auth/signInActions";

const NavbarComponent = ({ toggleSidebar, props }) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const dispatch = useDispatch();


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(SignOut());

    }
    return (
        <Navbar
            color="#06E2FF"
            style={{ backgroundColor: "#0C373A", height:"60px" }}
            light
            className="navbar"
            expand="md"
            fixed="top"
        >
            <Button color="dark" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {userInfo ? (
                        <Nav>
                            <a href="/" style={{ color: "#06E2FF" }} >{userInfo.item1.phoneNumber}</a>
                            <a href="/signin" style={{ color: "#06E2FF" }} onClick={handleLogout}>Log Out</a>
                        </Nav>
                    ) : (
                        <Nav>
                            <a href="/signin" style={{ color: "#06E2FF" }}>SignIn</a>
                        </Nav>
                        )}
                </Nav>
            </Collapse>
        </Navbar>
    );

};

export default NavbarComponent;


