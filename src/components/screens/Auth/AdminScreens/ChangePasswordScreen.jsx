import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adminPasswordUpdate } from '../../../../actions/Auth/adminActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function ChangePasswordScreen(props) {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const adminUpdatePassword = useSelector((state) => state.adminUpdatePassword);
    const { adminUpdatePasswordInfo } = adminUpdatePassword;

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const currentuserId = userInfo.item1.id;

        dispatch(adminPasswordUpdate(
            currentuserId,
            currentPassword,
            newPassword,
            confirmPassword
        ));
    }

    return (
        <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
                {userInfo && (

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="firstname">Currrent Password</Label>
                                    <Input type="password"
                                        name="currentPassword"
                                        id="currentPassword"
                                        placeholder="Enter Current Password"
                                        size="lg"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="newPassword">New Password</Label>
                                    <Input
                                        type="password"
                                        name="newPassword"
                                        id="newPassword"
                                        placeholder="Enter New Password"
                                        size="lg"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Enter Confirm Password"
                                        size="lg"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                       </Button>
                    </Form>

                )
                }
            </div >
            <div className="col-3">

            </div>
        </div>

    );
}
export default ChangePasswordScreen;

