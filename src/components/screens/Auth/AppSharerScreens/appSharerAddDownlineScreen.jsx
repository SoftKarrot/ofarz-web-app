import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { appSharerRegister } from '../../../../actions/Auth/appSharerActions';

function AppSharerAddDownlineScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const Register = useSelector(state => state.appSharerAddDownline);
    const { loading, error } = Register;

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const downlineCount = userInfo.item1.downlineCount;





    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        //dispatch(appSharerProfileDetail(userInfo.item1.id));
        return () => {
            //
        };
    }, []);


    const submitHandler = (e) => {
        e.preventDefault();
        const currentuser = userInfo.item1.id;

        dispatch(appSharerRegister(firstname, mobilenumber, currentuser, password, confirmPassword));

    }
    return <div className="form">
        {downlineCount >= 5 ? (
            <h1>Your DownLine Limition is Over</h1>
        ) : (
                <form onSubmit={submitHandler} >
                    <ul className="form-container">
                        <li>
                            <h5>You Can share your app more {5 - downlineCount} people</h5>
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
            )}

    </div>
}
export default AppSharerAddDownlineScreen;




