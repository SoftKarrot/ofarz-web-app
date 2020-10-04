import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import HomeScreen from './HomeScreenComponent';

import ProductHomeScreen from '../screens/Regular/Product/ProductHomeScreen';
import ProductCreateScreen from '../screens/Regular/Product/ProductCreateScreen';
import ProductDetailsScreen from '../screens/Regular/Product/ProductDetailScreen';


import CategoryHomeContainer from '../../containers/Reguler/categoryContainers/CategoryHomeContainer';
import CategoryCreateContainer from '../../containers/Reguler/categoryContainers/CategoryCreateContainer';
import CategoryDetailContaioner from '../../containers/Reguler/categoryContainers/CategoryDetailContaioner';
import CategoryEditContainer from '../../containers/Reguler/categoryContainers/CategoryEditContainer';
import ProductTypeHomeContainer from '../../containers/Reguler/productTypeContainers/ProductTypeHomeContainer';
import ProductTypeCreateContainer from '../../containers/Reguler/productTypeContainers/ProductTypeCreateContainer';
import ProductTypeDetailContainer from '../../containers/Reguler/productTypeContainers/ProductTypeDetailContainer';
import ProductTypeEditContainer from '../../containers/Reguler/productTypeContainers/ProductTypeEditContainer';


import CartScreen from '../screens/Regular/cart/cartScreen';
import ApplicationRoleHomeContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleHomeContainer';
import ApplicationRoleCreateContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleCreateContainer';
import ApplicationRoleDetailContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleDetailContainer';
import ApplicationRoleEditContainer from '../../containers/Auth/applicationRoleContainers/ApplicationRoleEditContainer';


import AppSharerSigninScreen from '../screens/Auth/AppSharerScreens/appSharerSigninScreen';
import AppSharerAddDownlineScreen from '../screens/Auth/AppSharerScreens/appSharerAddDownlineScreen';


import AdminSigninScreen from '../screens/Auth/AdminScreens/adminSigninScreen';
import AdminRegistrationScreen from '../screens/Auth/AdminScreens/adminRegistrationScreen';
import AdminProfileUpdateScreen from '../screens/Auth/AdminScreens/adminProfileUpdateScreen';
import AdminChangePasswordScreen from '../screens/Auth/AdminScreens/adminChangePasswordScreen';


import ModeratorSigninScreen from '../screens/Auth/ModeratorScreens/moderatorSigninScreen';
import ModeratorAddScreen from '../screens/Auth/ModeratorScreens/moderatorAddScreen';


import AgentSigninScreen from '../screens/Auth/AgentScreens/agentSigninScreen';
import AgentAddScreen from '../screens/Auth/AgentScreens/agentAddScreen';


import ShoperSigninScreen from '../screens/Auth/ShoperScreens/shoperSigninScreen';
import ShoperRegistrationScreen from '../screens/Auth/ShoperScreens/shoperRegistrationScreen';


import AgentFirtScreen from '../screens/Regular/Agent/agentFirstScreen';
import AgentSecondScreen from '../screens/Regular/Agent/agentSecondScreen';
import AgentProductsScreen from '../screens/Regular/Agent/agentProductScreen';


import CountryCreateScreen from '../screens/Area/country/countryCreateScreen';
import CountryScreen from '../screens/Area/country/countriesScreen';
import CountryDetails from '../screens/Area/country/countryDetailsScreen';
import CountryEditScreen from '../screens/Area/country/countryEditScreen';


import DivisionCreateScreen from '../screens/Area/division/divisionCreateScreen';
import DivisionScreen from '../screens/Area/division/divisionsScreen';
import DivisionDetails from '../screens/Area/division/divisionDetailsScreen';
import DivisionEditScreen from '../screens/Area/division/divisionEditScreen';


import DistrictScreen from '../screens/Area/district/districtsScreen';
import DistrictCreateScreen from '../screens/Area/district/districtCreateScreen';
import DistrictDetails from '../screens/Area/district/districtDetailsScreen';
import DistrictEditScreen from '../screens/Area/district/districtEditScreen';


import UpozilaScreen from '../screens/Area/upozila/upozilasScreen';
import UpozilaCreateScreen from '../screens/Area/upozila/upozilaCreateScreen';
import UpozilaEditScreen from '../screens/Area/upozila/upozilaEditScreen';
import UpozilaDetails from '../screens/Area/upozila/upozilaDetailsScreen';


import UnionScreen from '../screens/Area/union/unionsScreen';
import UnionCreateScreen from '../screens/Area/union/unionCreateScreen';
import UnionDetails from '../screens/Area/union/unionDetailsScreen';
import UnionEditScreen from '../screens/Area/union/unionEditScreen';


import MarketsScreen from '../screens/Area/market/marketsScreen';
import MarketCreateScreen from '../screens/Area/market/marketCreateScreen';
import MarketDetails from '../screens/Area/market/marketDetailsScreen';
import MarketEditScreen from '../screens/Area/market/marketEditScreen';


import ProductsScreen from '../screens/Regular/Product/productsScreen';
import ProductEditScreen from '../screens/Regular/Product/productEditScreen';
import AdminProfileScreen from '../screens/Auth/AdminScreens/adminProfileScreen';


import NavbarComponent from './NavbarComponent';


import PaymentTypeScreen from "../screens/Fund/paymentType/paymentTypesScreen";
import PaymentTypeCreateScreen from "../screens/Fund/paymentType/paymentTypeCreateScreen";
import PaymentTypeDetails from "../screens/Fund/paymentType/paymentTypeDetailsScreen";
import PaymentTypeEditScreen from "../screens/Fund/paymentType/paymentTypeEditScreen";
import PaymentProductTypeScreen from "../screens/Fund/payment/AppSharer/paymentProductTypeListScreen";
import PaymentTypesForPay from "../screens/Fund/payment/AppSharer/paymentTypeListScreen";

const RouteComponemt = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <NavbarComponent toggleSidebar={toggleSidebar} />
        <Switch>
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
            <Route path="/productsadmin" exact component={ProductsScreen} />
            <Route path="/productedit/:id" exact component={ProductEditScreen} />

            <Route path="/cart/:id?" exact component={CartScreen} />

            <Route path="/applicationroles" exact component={ApplicationRoleHomeContainer} />
            <Route path="/applicationrolecreate" exact component={ApplicationRoleCreateContainer} />
            <Route path="/applicationroledetail/:id" exact component={ApplicationRoleDetailContainer} />
            <Route path="/applicationroleedit/:id" exact component={ApplicationRoleEditContainer} />

            <Route path="/appsharersignin" exact component={AppSharerSigninScreen} />
            <Route path="/appshareradddownline" exact component={AppSharerAddDownlineScreen} />

            <Route path="/adminsignin" exact component={AdminSigninScreen} />
            <Route path="/adminregistrations" exact component={AdminRegistrationScreen} />
            <Route path="/adminprofileupdate" exact component={AdminProfileUpdateScreen} />
            <Route path="/adminpasswordupdate" exact component={AdminChangePasswordScreen} />
            <Route path="/adminprofile" exact component={AdminProfileScreen} />

            <Route path="/moderatorsignin" exact component={ModeratorSigninScreen} />
            <Route path="/moderatoradd" exact component={ModeratorAddScreen} />

            <Route path="/agentsignin" exact component={AgentSigninScreen} />
            <Route path="/agentadd" exact component={AgentAddScreen} />

            <Route path="/shopersignin" exact component={ShoperSigninScreen} />
            <Route path="/shoperregistration" exact component={ShoperRegistrationScreen} />

            <Route path="/agentptype" exact component={AgentFirtScreen} />
            <Route path="/agentcategories/:id" exact component={AgentSecondScreen} />
            <Route path="/agentproductsscreen/:ptype,:id" exact component={AgentProductsScreen} />

            <Route path="/countries" exact component={CountryScreen} />
            <Route path="/countrycreate" exact component={CountryCreateScreen} />
            <Route path="/countrydetails/:id" exact component={CountryDetails} />
            <Route path="/countryupdate/:id" exact component={CountryEditScreen} />

            <Route path="/divisions" exact component={DivisionScreen} />
            <Route path="/divisioncreate" exact component={DivisionCreateScreen} />
            <Route path="/divisiondetails/:id" exact component={DivisionDetails} />
            <Route path="/divisionupdate/:id" exact component={DivisionEditScreen} />


            <Route path="/districts" exact component={DistrictScreen} />
            <Route path="/districtcreate" exact component={DistrictCreateScreen} />
            <Route path="/districtdetails/:id" exact component={DistrictDetails} />
            <Route path="/districtupdate/:id" exact component={DistrictEditScreen} />


            <Route path="/upozilas" exact component={UpozilaScreen} />
            <Route path="/upozilacreate" exact component={UpozilaCreateScreen} />
            <Route path="/upoziladetails/:id" exact component={UpozilaDetails} />
            <Route path="/upozilaupdate/:id" exact component={UpozilaEditScreen} />


            <Route path="/unions" exact component={UnionScreen} />
            <Route path="/unioncreate" exact component={UnionCreateScreen} />
            <Route path="/uniondetails/:id" exact component={UnionDetails} />
            <Route path="/unionupdate/:id" exact component={UnionEditScreen} />

            <Route path="/markets" exact component={MarketsScreen} />
            <Route path="/marketcreate" exact component={MarketCreateScreen} />
            <Route path="/marketdetails/:id" exact component={MarketDetails} />
            <Route path="/marketupdate/:id" exact component={MarketEditScreen} />

            <Route path="/paymenttypes" exact component={PaymentTypeScreen} />
            <Route path="/paymenttypecreate" exact component={PaymentTypeCreateScreen} />
            <Route path="/paymentTypedetails/:id" exact component={PaymentTypeDetails} />
            <Route path="/paymenttypeupdate/:id" exact component={PaymentTypeEditScreen} />

            <Route path="/paymentproducttypes" exact component={PaymentProductTypeScreen} />
            <Route path="/paymenttypesforpay" exact component={PaymentTypesForPay} />

        </Switch>
    </Container>
);

export default RouteComponemt;

