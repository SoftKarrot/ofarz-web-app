import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moderatorSignin } from '../../../../actions/Auth/moderatorActions';



function ModeratorSigninScreen(props) {

    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const SignIn = useSelector(state => state.ModeratorSignin);
    const { loading, userInfo, error } = SignIn;
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

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(moderatorSignin(mobilenumber, password));

    }
    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="mobilenumber">
                        Mobilenumber
                    </label>
                    <input type="mobilenumber" name="mobilenumber" id="mobilenumber" onChange={(e) => setMobilenumber(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className="button primary">Signin</button>
                </li>
            </ul>
        </form>
    </div>
}
export default ModeratorSigninScreen;