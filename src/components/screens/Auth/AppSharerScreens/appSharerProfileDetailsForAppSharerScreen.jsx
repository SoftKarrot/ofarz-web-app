import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../../../../actions/Regular/productActions';
import { appSharerProfileDetails } from '../../../../actions/Auth/appSharerActions';


function AppSharerProfileDetailsForAppSharer(props) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    console.log("Outside",sharer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appSharerProfileDetails(userInfo.item1.id));
        console.log("Inside", sharer)
        return () => {
            //
        };
    }, [userInfo.item1.id]);


    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back to result</Link>
            </div>
            {userInfo && sharer && (
                <>
                    <div className="details">
                        
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{sharer.id}</h4>
                                </li>                        
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
export default AppSharerProfileDetailsForAppSharer;
