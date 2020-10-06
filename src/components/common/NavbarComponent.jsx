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
            color="light"
            light
            className="navbar shadow-sm p-3 mb-5 bg-white rounded"
            expand="md"
        >
            <Button color="dark" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {userInfo ? (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to={"/"}>
                                    {userInfo.item1.phoneNumber}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    to={"/signin"}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    ) : (
                            <Nav>
                                <NavItem>
                                    <NavLink tag={Link} to={"/signin"}>
                                        SignIn
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        )}
                </Nav>
            </Collapse>
        </Navbar>
    );

};

export default NavbarComponent;


