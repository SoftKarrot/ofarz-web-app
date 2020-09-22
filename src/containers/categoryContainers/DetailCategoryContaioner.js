import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../../components/common/BackComponent";
import { connect } from "react-redux";
import { detailsCategory } from "../../actions/categoryActions";
import CategoryDetails from "../../components/screens/category/CategoryDetailsScreen";

class DetailCategoryContainer extends Component {
    
    componentDidMount() {
        this.props.dispatch(detailsCategory(this.props.match.params.id));
    }

    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Detail Category</h1>
                <CategoryDetails />
            </Container>
        );
    }
}

export default connect()(DetailCategoryContainer);