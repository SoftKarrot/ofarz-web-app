import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
    return {
        roleDetails: state.applicationRoleDetails.role,
        //errorCategoryDetail: state.Categorys.errorCategoryDetail,
    };
};

const ApplicationRoleDetails = (props) => {
    debugger
    return (
        <Table striped>
            <tbody>
                <tr>
                    <td width="200">Name</td>
                    <td width="10">:</td>
                    <td>{props.roleDetails.roleName}</td>
                </tr>
                <tr>
                    <td width="200">Description</td>
                    <td width="10">:</td>
                    <td>{props.roleDetails.description}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default connect(mapStateToProps, null)(ApplicationRoleDetails);
