import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from "reactstrap";
import { useSelector } from 'react-redux';
import { appSharerLogout } from "../../actions/Auth/appSharerActions";
import { useDispatch } from 'react-redux';

const NavbarComponent = (props) => {
    const dispatch = useDispatch();

    const appSharerSignin = useSelector((state) => state.appSharerSignin);
    const { appSharerInfo } = appSharerSignin;
    //debugger
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(appSharerLogout());
        props.history.push("/signin");
    }

    return (
        <div>

            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">Ofarz</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            {/* <NavItem >
                                <NavLink href="/categories">Category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/producttypes">ProductType</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">ProductList</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/productcreate">Create Product</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="/agentptype">Agent Product List</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/adminregistrations">Admin Registration</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/adminsignin">Admin SignIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/adminprofileupdate">Update Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/adminpasswordupdate">Change Password</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/adminprofile">Admin Profile</NavLink>
                            </NavItem>
                            {/*
                            <NavItem>
                                <NavLink href="/moderatoradd">Add Moderator</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/moderatorsignin">Moderator SignIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/agentadd">Add Agent</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/agentsignin">Agent SignIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/shoperregistration">Shoper SignUp</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/shopersignin">Shoper SignIn</NavLink>
                            </NavItem> */}
                        </Nav>

                        <Nav className="mr-auto" navbar>
                            {appSharerInfo ? (
                                <Nav>
                                    <NavItem>
                                        <NavLink href="/profile">{appSharerInfo.item1.firstName}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/appshareradddownline">AppDownline</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/appsharersignin"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            ) : (
                                    <NavItem>
                                        <NavLink href="/appsharersignin">SignIn</NavLink>
                                    </NavItem>
                                )}


                            <NavItem>
                                <NavLink href="/applicationroles">Role</NavLink>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
