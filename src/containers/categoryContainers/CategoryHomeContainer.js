import React, { Component } from "react";
import TableComponent from "../../components/screens/category/TableComponent";
import { connect } from "react-redux";
import { listCategories, deleteCategory } from '../../actions/categoryActions'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listCategories());
        this.props.dispatch(deleteCategory());
    }
    
    render() {

        return (
            <div>
                <TableComponent />
            </div>
        );
    }
}

export default connect()(HomeContainer);
