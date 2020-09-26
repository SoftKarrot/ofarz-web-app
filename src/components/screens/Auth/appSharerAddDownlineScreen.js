import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { appSharerRegister } from '../../../actions/Auth/appSharerActions';
import jwt from 'jwt-decode'
function AppSharerAddDownlineScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    //const [currentuser, setCurrentUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.appSharerAddDownline);
    const { loading, userInfo, error } = Register;
    const appSharerSignin = useSelector((state) => state.appSharerSignin);
    const { appSharerInfo } = appSharerSignin;
    //const currentuser = appSharerInfo.item1.id;
    //debugger
    // var jwt = require("jsonwebtoken");

    // var token1 = currentUser
    // //var token2 = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    // var decode1 = jwt.decode(token1);


    // console.log("without leading space");
    // console.log(decode1);
    // { sub: '1234567890', name: 'John Doe', iat: 1516239022 }


    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [userInfo]);

    // useEffect(() => {
    //     //debugger
    //     return () => {
    //         //
    //     };

    // }, [currentUser]);

    const submitHandler = (e) => {
        e.preventDefault();
        //setCurrentUser(appSharerInfo.item1.id);
        const currentuser = appSharerInfo.item1.id;
        //debugger
        dispatch(appSharerRegister(firstname, mobilenumber, currentuser, password, confirmPassword));

    }
    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Create Account</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="firstname">
                        Name
                    </label>
                    <input type="firstname" name="firstname" id="firstname" onChange={(e) => setFirstName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="PhoneNumber">
                        Mobilenumber
                    </label>
                    <input type="text" name="mobilenumber" id="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="confirmPassword">Re-Enter Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Register</button>
                </li>
            </ul>
        </form>
    </div>
}
export default AppSharerAddDownlineScreen;





