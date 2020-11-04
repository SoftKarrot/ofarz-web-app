import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { agentsList } from '../../../../actions/Auth/agentActions'

const AgentListForAdmin = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const agentLists = useSelector((state) => state.agentList)
    const { agents } = agentLists;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(agentsList())
        return () => {
            //
        };
    }, []);


    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            {agents ? (
                <div className="row">
                    {agents.map((agent) => (
                        <div className="col-3">
                            <Card key={agent.id} style={{ color: "#fff", backgroundColor: "#0C373A" }} >
                                <Card.Body>
                                    <p style={{ color: "#06E2FF" }}>___________________________</p>
                                    <Card.Title>
                                        {agent.firstName}
                                    </Card.Title>
                                    <Card.Subtitle>
                                        {agent.phoneNumber}
                                    </Card.Subtitle>
                                    <Card.Subtitle>
                                        {agent.agentCode}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                            <br />
                            <br />
                        </div>
                    ))}
                </div>

            ) : (
                    <h1></h1>
                )}
        </div>
    );
};

export default AgentListForAdmin;
