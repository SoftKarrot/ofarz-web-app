import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn } from '../../../../actions/Auth/signInActions';


function SigninScreen(props) {

    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);

    const { loading, userInfo, error } = userSignIn;
    const dispatch = useDispatch();

    //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {

        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(SignIn(mobilenumber, password));

        props.history.push("/");


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
                <li>
                    <a href="/shoperregistration">Create Shoper Account</a>
                </li>
            </ul>
        </form>
    </div>
}
export default SigninScreen;