import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withdrawAppSharer } from '../../../../actions/Fund/withdrawActions';


function WithdrawMoneyAppSharer(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
  
            const sharerId = userInfo.item1.id;
            dispatch(withdrawAppSharer(amount, agentPhnNumber, sharerId));
  

    }

    const handleAmount = (e) => {
        debugger
        if (e.target.event > userInfo.item3.mainAccount) {
            return (
                <h1>You Can Withdraw {userInfo.item3.mainAccount}</h1>
            )
        }
    }

    return <div className="form">

        {userInfo.item3.mainAccount > 0 ?
            (
                <form onSubmit={submitHandler} >
                    <ul className="form-container">
                        <li>
                            <p>You Can Withdraw {userInfo.item3.mainAccount} Taka</p>
                        </li>
                        <li>
                            <label htmlFor="amount">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                onChange={(e) => setAmount(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="agentPhnNumber">
                                Agent Phone Number
                    </label>
                            <input
                                type="text"
                                id="agentPhnNumber"
                                name="agentPhnNumber"
                                onChange={(e) => setAgentPhnNumber(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Withdraw</button>
                        </li>
                    </ul>
                </form>) : (
                <h1>You Do Not Have Sufficient Balance</h1>
            )}

    </div>
}
export default WithdrawMoneyAppSharer;