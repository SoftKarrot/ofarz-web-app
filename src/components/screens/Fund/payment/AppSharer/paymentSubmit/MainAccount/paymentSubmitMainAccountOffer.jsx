import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitPaymentMainAccountOffer } from '../../../../../../../actions/Fund/paymentActions';


function PaymentMainAccountOffer(props) {

    const [amount, setAmount] = useState('');
    const [agentPhnNumber, setAgentPhnNumber] = useState('');

    const appSharerSignin = useSelector((state) => state.appSharerSignin);
    const { appSharerInfo } = appSharerSignin;

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const payerId = appSharerInfo.item1.id;
        dispatch(submitPaymentMainAccountOffer(amount, agentPhnNumber, payerId));

    }
    return <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <p>Table Cash Offer</p>
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
                    <button type="submit" className="button primary">Submit Payment</button>
                </li>
            </ul>
        </form>
    </div>
}
export default PaymentMainAccountOffer;