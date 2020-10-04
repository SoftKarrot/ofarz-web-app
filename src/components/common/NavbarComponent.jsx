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
import { appSharerLogout } from "../../actions/Auth/appSharerActions";
import { useDispatch } from 'react-redux';

const NavbarComponent = ({ toggleSidebar, props }) => {

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const dispatch = useDispatch();

    const appSharerSignin = useSelector((state) => state.appSharerSignin);
    const { appSharerInfo } = appSharerSignin;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(appSharerLogout());
        props.history.push("/signin");
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
                    <NavItem>
                        <NavLink tag={Link} to={"/page-1"}>
                            page 1
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/page-2"}>
                            page 2
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/page-3"}>
                            page 3
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/page-4"}>
                            page 4
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );

};

export default NavbarComponent;


