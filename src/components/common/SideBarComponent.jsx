import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";


const SideBar = ({ isOpen, toggle }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })}>

        <div className="sidebar-header">
            <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                &times;
            </span>
            <h3>OfarZ</h3>
        </div>

        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/"}>
                        <h3>Home</h3>
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/paymenttypes"}>
                        Payment Types
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/paymentproducttypes"}>
                        Make Payment
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/adminregistrations"}>
                        Admin Registration
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/adminsignin"}>
                        Admin SignIn
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/adminprofileupdate"}>
                        Admin Update Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/adminpasswordupdate"}>
                        Admin Change Password
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/adminprofile"}>
                        Admin Profile
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/agentadd"}>
                        Add Agent
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/agentptype"}>
                        Agent Product List
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink tag={Link} to={"/agentsignin"}>
                        Agent SignIn
                    </NavLink>
                </NavItem>
                <p>______________________________</p>

                <NavItem>
                    <NavLink tag={Link} to={"/moderatoradd"}>
                        Add Moderator
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/moderatorsignin"}>
                        Moderator SignIn
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/appshareradddownline"}>
                        AppDownline
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/appsharersignin"}>
                        AppSharer SignIn
                    </NavLink>
                </NavItem>

                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/shoperregistration"}>
                        Shoper SignUp
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/shopersignin"}>
                        Shoper SignIn
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/categories"}>
                        Category
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/producttypes"}>
                        ProductType
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/products"}>
                        ProductList
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/productcreate"}>
                        Create Product
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/applicationroles"}>
                        Application Role
                    </NavLink>
                </NavItem>
                <p>______________________________</p>
                <NavItem>
                    <NavLink tag={Link} to={"/countries"}>
                        Country
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/divisions"}>
                        Division
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/districts"}>
                        District
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/upozilas"}>
                        Upozila
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/unions"}>
                        Union
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/markets"}>
                        Market
                    </NavLink>
                </NavItem>

            </Nav>
        </div>
    </div>
);

export default SideBar;
