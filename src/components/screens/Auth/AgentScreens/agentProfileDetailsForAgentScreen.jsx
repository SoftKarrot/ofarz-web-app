import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appSharerProfileDetails } from '../../../../actions/Auth/appSharerActions';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { detailsCountry } from '../../../../actions/Area/countryActions';
import { detailsDivision } from '../../../../actions/Area/divisionActions';
import { detailsDistrict } from '../../../../actions/Area/districtActions';
import { detailsUpozila } from '../../../../actions/Area/upozilaActions';
import { detailsUnion } from '../../../../actions/Area/unionOrWardActions';


function AgentProfileDetailsForAgent(props) {

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

        dispatch(detailsCountry(sharer.countryId))
        dispatch(detailsDivision(sharer.divisionId))
        dispatch(detailsDistrict(sharer.districtId))
        dispatch(detailsUpozila(sharer.upozilaId))
        dispatch(detailsUnion(sharer.unionOrWardId))

        dispatch(appSharerProfileDetails(userInfo.item1.id));

        console.log("Inside", sharer)
        return () => {
            //
        };
    }, []);


    return (



        <div
            className="container"
            style={{
                width: "876px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "60px"
            }}
        >
            <Card style={{ color: "#06E2FF", backgroundColor: "#0C373A" }} >

                <div className="row">
                    <div className="col-8">
                        <Card.Body>
                            <br />
                            <br />
                            <br />
                            <Card.Title><h3>{sharer.firstName} {sharer.lastName}</h3></Card.Title>
                        </Card.Body>
                    </div>
                    <div className="col-4">
                        <Card.Img
                            variant="top"
                            src={sharer.profilePhoto} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <Card.Title><h4>Phone Number: {sharer.phoneNumber}</h4></Card.Title>
                        </Card.Body>
                    </div>
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <Card.Title><h4>Nid Number: {sharer.nid_Number}</h4></Card.Title>
                        </Card.Body>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <Card.Title><h4>Agent Code: {sharer.agentCode}</h4></Card.Title>
                        </Card.Body>
                    </div>
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                        </Card.Body>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>________________________________________________</p>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Union/Ward: {union.name}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Upozila: {upozila.name}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>District: {district.name}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Division: {division.name}</ListGroupItem>
                                <ListGroupItem style={{ backgroundColor: "#0C373A" }}>Country: {country.name}</ListGroupItem>
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
        </div>
    );
}
export default AgentProfileDetailsForAgent;
