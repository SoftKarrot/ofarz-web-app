import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../../../../actions/Regular/productActions';
import { appSharerProfileDetails } from '../../../../actions/Auth/appSharerActions';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { detailsCountry } from '../../../../actions/Area/countryActions';
import { detailsDivision } from '../../../../actions/Area/divisionActions';
import { detailsDistrict } from '../../../../actions/Area/districtActions';
import { detailsUpozila } from '../../../../actions/Area/upozilaActions';
import { detailsUnion } from '../../../../actions/Area/unionOrWardActions';



function AppSharerProfileDetailsForAppSharer(props) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    const countryDetails = useSelector((state) => state.countryDetails);
    const { country } = countryDetails;

    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;

    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;

    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;

    console.log("Outside", sharer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appSharerProfileDetails(userInfo.item1.id));


        dispatch(detailsCountry(sharer.countryId))
        dispatch(detailsDivision(sharer.divisionId))
        dispatch(detailsDistrict(sharer.districtId))
        dispatch(detailsUpozila(sharer.upozilaId))
        dispatch(detailsUnion(sharer.unionOrWardId))


        console.log("Inside", sharer)
        return () => {
            //
        };
    }, []);


    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { userInfo ? (

            <Card style={{ color: "#fff", backgroundColor: "#0C373A" }} >

                <div className="row">
                    <div className="col-6">

                        <Card.Body>
                            <br />
                            <br />
                            <br />
                            <Card.Title><h3>{userInfo.item1.firstName} {userInfo.item1.lastName}</h3></Card.Title>
                        </Card.Body>
                    </div>
                    <div className="col-4">
                        <Card.Img
                            variant="top"
                            src={userInfo.item1.profilePhoto} />
                    </div>
                    <div className="col-2">

                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <Card.Title><h4>Phone Number: {userInfo.item1.phoneNumber}</h4></Card.Title>
                        </Card.Body>
                    </div>
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <Card.Title><h4>Nid Number: {userInfo.item1.nid_Number} 0980349</h4></Card.Title>
                        </Card.Body>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}><h6>Total Team Member: {userInfo.item1.downlineCount}</h6></ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>First Level: {userInfo.item1.firstLevelDownlineCount}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Second Level: {userInfo.item1.secondLevelDownlineCount}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Third Level: {userInfo.item1.thirdLevelDownlineCount}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Fourth Level: {userInfo.item1.fourthLevelDownlineCount}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Fifth Level: {userInfo.item1.fifthLevelDownlineCount}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </div>
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Nominee Name: {userInfo.item1.nominee_Name}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Nominee Phone Number: {userInfo.item1.nominee_PhonNumber}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Nominee Relation: {userInfo.item1.nominee_Relation}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Union/Ward: {userInfo.item1.unionOrWardName}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Upozila: {userInfo.item1.upozilaName}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>District: {userInfo.item1.districtName}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Division: {userInfo.item1.divisionName}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Country: {userInfo.item1.countryName}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <Card.Body>
                                <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                                <Card.Link href="/appsharerprofileupdate">Update Your Profile</Card.Link>
                            </Card.Body>
                        </div>
                        <div className="row">
                            <Card.Body>
                                <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                                <Card.Link href="/passwordupdate">Change Password?</Card.Link>
                                <a href="/appsharerprofileupdate">Update Your Profile</a>
                            </Card.Body>
                        </div>
                        <div className="row">
                            <Card.Body>
                                <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                                <Card.Link href="#">Change Phone Number</Card.Link>
                            </Card.Body>
                        </div>
                        <div className="row">
                            <Card.Body>
                                <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                                <Card.Link href="#">Change Email</Card.Link>
                            </Card.Body>
                        </div>
                    </div>
                </div>

            </Card>

        ) : (
                <h1></h1>
            )}
    </div >
    );

}
export default AppSharerProfileDetailsForAppSharer;
