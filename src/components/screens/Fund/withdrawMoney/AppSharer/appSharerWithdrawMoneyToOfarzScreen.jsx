import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'reactstrap';
import { fundAppSharers } from '../../../../../actions/Fund/fundActions';
import { withdrawAppSharerToOfarz } from '../../../../../actions/Fund/withdrawActions';


function WithdrawMoneyAppSharerToOfarz(props) {

    const [amount, setAmount] = useState('');
    const [ofarzPhnNumber, setOfarzPhnNumber] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const fundListAppSharer = useSelector((state) => state.fundListAppSharer)
    const { funds } = fundListAppSharer;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundAppSharers(userInfo.item1.phoneNumber))
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const sharerId = userInfo.item1.id;

        dispatch(withdrawAppSharerToOfarz(amount, ofarzPhnNumber, sharerId));


    }

    const columns = [
        {
            dataField: "mainAccount",
            text: "MainAccount",
            sort: true,
            headerAlign: 'center',
            style: { backgroundColor: 'white' },
            alignItems: 'center'

        },
    ]
    return <div className="row">
        <div className="col-3">

        </div>
        <div className="col-5">
            {funds ? (
                <ToolkitProvider
                    keyField="id"
                    data={funds}
                    columns={columns}

                >
                    {(props) => (
                        <div>
                            <BootstrapTable
                                {...props.baseProps}
                            />
                        </div>
                    )}
                </ToolkitProvider>
            ) : (
                    <div className="text-center">
                        {props.errorCategoriesList ? (
                            <h4>{props.errorCategoriesList}</h4>
                        ) : (
                                <Spinner color="dark" />
                            )}
                    </div>
                )}


            {userInfo.item3.mainAccount > 0 && funds ?
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
                                <label htmlFor="ofarzPhnNumber">
                                    Agent Phone Number
                    </label>
                                <input
                                    type="text"
                                    id="ofarzPhnNumber"
                                    name="ofarzPhnNumber"
                                    onChange={(e) => setOfarzPhnNumber(e.target.value)}>
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
        <div className="col-3">

        </div>
    </div>
}
export default WithdrawMoneyAppSharerToOfarz;