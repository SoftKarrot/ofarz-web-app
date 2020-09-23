import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import CategoryCreateContainer from '../../containers/categoryContainers/CategoryCreateContainer';
import CategoryDetailContaioner from '../../containers/categoryContainers/CategoryDetailContaioner';
import CategoryEditContainer from '../../containers/categoryContainers/CategoryEditContainer';
import CategoryHomeContainer from '../../containers/categoryContainers/CategoryHomeContainer';
import ProductTypeCreateContainer from '../../containers/productTypeContainers/ProductTypeCreateContainer';
import ProductTypeDetailContainer from '../../containers/productTypeContainers/ProductTypeDetailContainer';
import ProductTypeEditContainer from '../../containers/productTypeContainers/ProductTypeEditContainer';
import ProductTypeHomeContainer from '../../containers/productTypeContainers/ProductTypeHomeContainer';

import ProductHomeScreen from '../screens/Product/ProductHomeScreen';
import ProductCreateScreen from '../screens/Product/ProductCreateScreen';

import HomeScreen from './HomeScreenComponent';


class RouteComponemt extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={HomeScreen} />

                <Route path="/categories" exact component={CategoryHomeContainer} />
                <Route path="/categorycreate" exact component={CategoryCreateContainer} />
                <Route path="/categorydetail/:id" exact component={CategoryDetailContaioner} />
                <Route path="/categoryedit/:id" exact component={CategoryEditContainer} />

                <Route path="/producttypes" exact component={ProductTypeHomeContainer} />
                <Route path="/producttypecreate" exact component={ProductTypeCreateContainer} />
                <Route path="/producttypedetail/:id" exact component={ProductTypeDetailContainer} />
                <Route path="/producttypeedit/:id" exact component={ProductTypeEditContainer} />

                <Route path="/products" exact component={ProductHomeScreen} />
                <Route path="/productcreate" exact component={ProductCreateScreen} />
                {/* <Route path="/productdetail/:id" exact component={ProductTypeDetailContainer} />
                <Route path="/productedit/:id" exact component={ProductTypeEditContainer} /> */}
            </BrowserRouter>
        );
    }
}

export default RouteComponemt;