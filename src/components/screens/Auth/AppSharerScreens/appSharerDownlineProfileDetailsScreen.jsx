import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { appSharerProfileDetails } from '../../../../actions/Auth/appSharerActions';


function AppSharerDownlineProfileDetailsForAppSharer(props) {

    const id = props.match.params.id;

    const profileDetails = useSelector((state) => state.appSharerProfileDetails);
    const { sharer } = profileDetails;

    console.log("Outside", sharer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appSharerProfileDetails(id));
        console.log("Inside", sharer)
        return () => {
            //
        };
    }, [id]);


    return (
        <div>
            <div className="back-to-result">
                <Link to="/">Back to result</Link>
            </div>
            {sharer && sharer && (
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
export default AppSharerDownlineProfileDetailsForAppSharer;
