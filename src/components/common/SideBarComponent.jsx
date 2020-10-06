import React, { useEffect } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import { useSelector } from 'react-redux';


function SideBar({ isOpen, toggle }) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;



    useEffect(() => {

        return () => {
            //
        }
    }, [])

    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>

            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
            </span>
                <h3>OfarZ</h3>
            </div>
            {userInfo.item2.name == "Admin" ? (
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
                            <NavLink tag={Link} to={"/getallpaymentlists"}>
                                Get All Payment Lists
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsagent"}>
                                Get All Payment Lists Agent
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsAppSharer"}>
                                Get All Payment Lists App Sharer
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/getallpaymentlistsShoper"}>
                                Get All Payment Lists Shoper
                                </NavLink>
                        </NavItem>
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/adminregistrations"}>
                                Admin Registration
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

                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/moderatoradd"}>
                                Add Moderator
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
            ) : (
                    <h1> </h1>)}

            {userInfo.item2.name == "Agent" ? (
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
                            <NavLink tag={Link} to={"/agentptype"}>
                                Agent Product List
                            </NavLink>
                        </NavItem>

                    </Nav>

                </div>) :
                <h1></h1>
            }
            {userInfo.item2.name == "Moderator" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <p>______________________________</p>
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <p>______________________________</p>

                    </Nav>

                </div>) :
                <h1></h1>
            }
            {userInfo.item2.name == "AppSharer" ? (
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
                            <NavLink tag={Link} to={"/appshareradddownline"}>
                                AppDownline
                             </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/paymentproducttypes"}>
                                Make Payment
                            </NavLink>
                        </NavItem>
                        <SubMenu title="Payment" items={submenus[0]} />
                    </Nav>

                </div>) :
                <h1></h1>
            }

            {userInfo.item2.name == "Shoper" ? (
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
                            <NavLink tag={Link} to={"/shopersignin"}>
                                Shoper SignIn
                            </NavLink>
                        </NavItem>

                    </Nav>

                </div>) :
                <h1></h1>
            }
        </div>
    );
}



const submenus = [
    [
        {
            title: "Offer",
            target: "paymentofferproduct",
        },
        {
            title: "Promotional",
            target: "paymentpromotionalproduct",
        },
    ],
    [
        {
            title: "Page 1",
            target: "Page-1",
        },
        {
            title: "Page 2",
            target: "Page-2",
        },
    ],
];




export default SideBar;
