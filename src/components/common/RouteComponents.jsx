import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import ProductHomeScreen from '../screens/Regular/Product/ProductHomeScreen';
import ProductCreateScreen from '../screens/Regular/Product/ProductCreateScreen';

import HomeScreen from './HomeScreenComponent';
import CategoryHomeContainer from '../../containers/Reguler/categoryContainers/CategoryHomeContainer';
import CategoryCreateContainer from '../../containers/Reguler/categoryContainers/CategoryCreateContainer';
import CategoryDetailContaioner from '../../containers/Reguler/categoryContainers/CategoryDetailContaioner';
import CategoryEditContainer from '../../containers/Reguler/categoryContainers/CategoryEditContainer';
import ProductTypeHomeContainer from '../../containers/Reguler/productTypeContainers/ProductTypeHomeContainer';
import ProductTypeCreateContainer from '../../containers/Reguler/productTypeContainers/ProductTypeCreateContainer';
import ProductTypeDetailContainer from '../../containers/Reguler/productTypeContainers/ProductTypeDetailContainer';
import ProductTypeEditContainer from '../../containers/Reguler/productTypeContainers/ProductTypeEditContainer';
import AppSharerAddDownlineScreen from '../screens/Auth/appSharerAddDownlineScreen';
import AppSharerSigninScreen from '../screens/Auth/appSharerSigninScreen';
import ProductDetailsScreen from '../screens/Regular/Product/ProductDetailScreen';
import CartScreen from '../screens/Regular/cart/cartScreen';
import ApplicationRoleHomeContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleHomeContainer';
import ApplicationRoleCreateContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleCreateContainer';
import ApplicationRoleDetailContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleDetailContainer';
import ApplicationRoleEditContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleEditContainer';


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
                <Route path="/productdetails/:id" exact component={ProductDetailsScreen} />
                {/* <Route path="/productedit/:id" exact component={ProductTypeEditContainer} /> */}

                
                <Route path="/cart/:id?" exact component={CartScreen} />

                
                <Route path="/applicationroles" exact component={ApplicationRoleHomeContainer} />
                <Route path="/applicationrolecreate" exact component={ApplicationRoleCreateContainer} />
                <Route path="/applicationroledetail/:id" exact component={ApplicationRoleDetailContainer} />
                <Route path="/applicationroleedit/:id" exact component={ApplicationRoleEditContainer} />


                <Route path="/appsharersignin" exact component={AppSharerSigninScreen} />
                <Route path="/appshareradddownline" exact component={AppSharerAddDownlineScreen} />

            </BrowserRouter>
        );
    }
}

export default RouteComponemt;