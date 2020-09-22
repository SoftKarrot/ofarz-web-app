import React, { Component } from "react";
import TableComponent from "../../components/screens/productType/ProductTypeTableComponents";
import { connect } from "react-redux";
import { listProducttypes, deleteProductType } from '../../actions/productTypeActions'

class ProductTypeHomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(listProducttypes());
        this.props.dispatch(deleteProductType());
    }

    render() {

        return (
            <div>
                <TableComponent />
            </div>
        );
    }
}

export default connect()(ProductTypeHomeContainer);
