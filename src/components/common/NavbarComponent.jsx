import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container,
} from "reactstrap";

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">Wahidev Academy</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
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
                            </NavItem>

                        </Nav>
                        <NavbarText>Admin</NavbarText>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
