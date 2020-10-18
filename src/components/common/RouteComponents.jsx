//#region Import

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


import AdminRegistrationScreen from '../screens/Auth/AdminScreens/adminRegistrationScreen';
import AdminProfileUpdateScreen from '../screens/Auth/AdminScreens/adminProfileUpdateScreen';

import ModeratorAddScreen from '../screens/Auth/ModeratorScreens/moderatorAddScreen';

import AgentAddScreen from '../screens/Auth/AgentScreens/agentAddScreen';

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
import PaymentOfferProduct from "../screens/Fund/payment/AppSharer/paymentOfferProductScreen";
import PaymentPromotionalProduct from "../screens/Fund/payment/AppSharer/paymentPromotionalProductScreen";
import PaymentTableCashOffer from "../screens/Fund/payment/AppSharer/paymentSubmit/TableCash/paymentSubmitTableCashOffer";
import PaymentTableCashPromotional from "../screens/Fund/payment/AppSharer/paymentSubmit/TableCash/paymentSubmitTableCashPromotional";
import PaymentMainAccountOffer from "../screens/Fund/payment/AppSharer/paymentSubmit/MainAccount/paymentSubmitMainAccountOffer";
import PaymentMainAccountPromotional from "../screens/Fund/payment/AppSharer/paymentSubmit/MainAccount/paymentSubmitMainAccountPromotional";
import PaymentBackShoppingOffer from "../screens/Fund/payment/AppSharer/paymentSubmit/BackShopping/paymentSubmitBackShoppingOffer";
import PaymentBackShoppingPromotional from "../screens/Fund/payment/AppSharer/paymentSubmit/BackShopping/paymentSubmitBackShoppingPromotional";


import PaymentListFullForAdminScreen from "../screens/Fund/paymentList/AdminAndModerator/paymentListFullForAdminAndModerator.";
import PaymentListAgentForAdminScreen from "../screens/Fund/paymentList/AdminAndModerator/paymentListAgentForAdminAndModerator";
import PaymentListAppSharerForAdminScreen from "../screens/Fund/paymentList/AdminAndModerator/paymentListAppSharerForAdminAndModerator.";
import PaymentListShoperForAdminScreen from "../screens/Fund/paymentList/AdminAndModerator/paymentListShoperForAdminAndModerator.";

import SigninScreen from "../screens/Auth/SignInScreen/signInScreen";

import WithdrawListAdminAndModeratorScreen from "../screens/Fund/withdrawMoney/AdminAndModerator.jsx/getAllWithdrawListForAdminAndModerator";
import WithdrawListAppSharerForAdminAndModeratorScreen from "../screens/Fund/withdrawMoney/AdminAndModerator.jsx/getAppSharerToAgentWithdrawListAdminAndModerator";


import FundListAgentForAdminScreen from "../screens/Fund/Funds/AdminAndModerator/getAllAgentFundForAdminAndModerator";
import FundListAppSharerForAdminScreen from "../screens/Fund/Funds/AdminAndModerator/getAllAppSharerFundsForAdminAndModerator";
import KarrotRegistrationScreen from "../screens/Auth/karrot/karrotAddScreen";
import CeoRegistrationScreen from "../screens/Auth/CEO/ceoAddScreen";
import PaymentListAppSharerForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListAppSharerForAppSharer";
import FundAppSharerForAdminScreen from "../screens/Fund/Funds/AdminAndModerator/getAppSharerFundForAdminAndModerator";
import WithdrawMoneyKarrotToOfarz from "../screens/Fund/withdrawMoney/Karrot/karrotWithdrawMoneyToOfarzScreen";
import OfarzRegistrationScreen from "../screens/Auth/AdminScreens/ofarzRegistrationScreen";
import FundOfarzForAdminScreen from "../screens/Fund/Funds/AdminAndModerator/getOfarzFundForAdminAndModerator";
import FundKarrotForKarrotScreen from "../screens/Fund/Funds/Karrot/getKarrotFundForKarrotScreen";
import WithdrawMoneyKarrotToAgent from "../screens/Fund/withdrawMoney/Karrot/karrotWithdrawMoneyToAgentScreen";
import WithdrawMoneyCEOToOfarz from "../screens/Fund/withdrawMoney/CEO/ceoWithdrawMoneyToOfarzScreen";
import WithdrawMoneyCEOToAgent from "../screens/Fund/withdrawMoney/CEO/ceoWithdrawMoneyToAgentScreen";
import FundCEOForCEOScreen from "../screens/Fund/Funds/CEO/getCeoFundForCeoScreen";
import PaymentBackShoppingOfferByShoper from "../screens/Fund/payment/Shoper/paymentSubmit/paymentSubmitBackShoppingOfferByShoperScreen";
import PaymentTableCashOfferByShoper from "../screens/Fund/payment/Shoper/paymentSubmit/paymentSubmitTableCashOfferByShoperScreen";
import FundShoperForShoperScreen from "../screens/Fund/Funds/Shoper/getShoperFundForShoperScreen";
import FundAppSharerForAppSharerScreen from "../screens/Fund/Funds/AppSharer/getAppSharerFundForAppSharerScreen";
import FirstDownlineListForAppSharerScreen from "../screens/Auth/AppSharerScreens/appSharerFirstDownlineListScreen";
import SecondDownlineListForAppSharerScreen from "../screens/Auth/AppSharerScreens/appSharerSecondDownlineList";
import AppSharerAddDownlineScreen from "../screens/Auth/AppSharerScreens/appSharerAddDownlineScreen";
import ThirdDownlineListForAppSharerScreen from "../screens/Auth/AppSharerScreens/appSharerThirdDownlineScreen";
import FifthDownlineListForAppSharerScreen from "../screens/Auth/AppSharerScreens/appSharerFifthDownlineScreen";
import FourthDownlineListForAppSharerScreen from "../screens/Auth/AppSharerScreens/appSharerFourthDownlineScreen";
import AppSharerProfileDetailsForAppSharer from "../screens/Auth/AppSharerScreens/appSharerProfileDetailsForAppSharerScreen";
import AppSharerDownlineProfileDetailsForAppSharer from "../screens/Auth/AppSharerScreens/appSharerDownlineProfileDetailsScreen";

import ChangePasswordScreen from "../screens/Auth/AdminScreens/ChangePasswordScreen";
import FundCeoForAdminScreen from "../screens/Fund/Funds/AdminAndModerator/getCeoFundForAdminAndModerator";
import FundKarrotForAdminScreen from "../screens/Fund/Funds/AdminAndModerator/getKarrotFundForAdminAndModerator";
import WithdrawMoneyAppSharerToAgent from "../screens/Fund/withdrawMoney/AppSharer/appSharerWithdrawMoneyToAgentScreen";
import WithdrawMoneyAppSharerToOfarz from "../screens/Fund/withdrawMoney/AppSharer/appSharerWithdrawMoneyToOfarzScreen";
import WithdrawMoneyAgentToOfarz from "../screens/Fund/withdrawMoney/Agent/agentWithdrawMoneyToOfarzScreen";

import WithdrawListKarrotToOfarzForKarrotScreen from "../screens/Fund/withdrawList/Karrot/withdrawListKarrotToOfarzForKarrotScreen";

import WithdrawListCeoToAgentForCeoScreen from "../screens/Fund/withdrawList/CEO/withdrawListCeoToAgentForCeoScreen";
import WithdrawListCeoToOfarzForCeoScreen from "../screens/Fund/withdrawList/CEO/withdrawListCeoToOfarzForCeoScreen";
import WithdrawListKarrotToAgentForKarrotScreen from "../screens/Fund/withdrawList/Karrot/withdrawListKarrotToAgentForKarrotScreen";
import PaymentListBackShoppingOfferFroShopperScreen from "../screens/Fund/paymentList/Shoper/paymentListBackShoppingOfferShopperForShopperScreen.jsx";
import PaymentListTableCashOfferFroShopperScreen from "../screens/Fund/paymentList/Shoper/paymentListTableCashOfferShopperForShopperScreen";
import WithdrawListAppSharerToOfarzForAppSharerScreen from "../screens/Fund/withdrawList/AppSharer/withdrawListAppSharerToOfarzForAppSharerScreen";
import WithdrawListAppSharerToAgentForAppSharerScreen from "../screens/Fund/withdrawList/AppSharer/withdrawListAppSharerToAgentForAppSharerScreen";
import PaymentListAllForShopperScreen from "../screens/Fund/paymentList/Shoper/paymentListAllShoperForShoperScreen";
import PaymentListTableCashPromotionalForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListTableCashPromotionalForAppSharerScreen";
import PaymentListTableCashOfferForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListTableCashOfferForAppSharerScreen";
import PaymentListMainAccountOfferForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListMainAccountOfferForAppSharerScreen";
import PaymentListBackShoppingOfferForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListBackShoppingOfferForAppSharerScreen";

import PaymentListBackShoppingPromotionalForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListBackShoppingPromotionalForAppSharerScreen";
import PaymentListMainAccountPromotionalForAppSharerScreen from "../screens/Fund/paymentList/AppSharer/paymentListMainAccountPromotionalForAppSharerScreen";


//#endregion

const RouteComponemt = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <NavbarComponent toggleSidebar={toggleSidebar} />
        <Switch>
            <Route path="/" exact component={HomeScreen} />

            <Route path="/signin" exact component={SigninScreen} />

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


            <Route path="/appshareradddownline" exact component={AppSharerAddDownlineScreen} />

            <Route path="/adminregistrations" exact component={AdminRegistrationScreen} />
            <Route path="/adminprofileupdate" exact component={AdminProfileUpdateScreen} />
            <Route path="/passwordupdate" exact component={ChangePasswordScreen} />
            <Route path="/adminprofile" exact component={AdminProfileScreen} />

            <Route path="/moderatoradd" exact component={ModeratorAddScreen} />

            <Route path="/agentadd" exact component={AgentAddScreen} />

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
            <Route path="/paymentofferproduct" exact component={PaymentOfferProduct} />
            <Route path="/paymentpromotionalproduct" exact component={PaymentPromotionalProduct} />

            <Route path="/submitpaymenttablecashoffer" exact component={PaymentTableCashOffer} />
            <Route path="/submitpaymenttablecashpromotional" exact component={PaymentTableCashPromotional} />

            <Route path="/submitpaymentmainaccountoffer" exact component={PaymentMainAccountOffer} />
            <Route path="/submitpaymentmainaccountpromotional" exact component={PaymentMainAccountPromotional} />

            <Route path="/submitpaymentbackshoppingoffer" exact component={PaymentBackShoppingOffer} />
            <Route path="/submitpaymentbackshoppingpromotional" exact component={PaymentBackShoppingPromotional} />

            <Route path="/submitpaymenttablecashofferbyshoper" exact component={PaymentTableCashOfferByShoper} />
            <Route path="/submitpaymentbackshoppingofferbyshoper" exact component={PaymentBackShoppingOfferByShoper} />

            <Route path="/getallpaymentlists" exact component={PaymentListFullForAdminScreen} />
            <Route path="/getallpaymentlistsAgent" exact component={PaymentListAgentForAdminScreen} />
            <Route path="/getallpaymentlistsAppSharer" exact component={PaymentListAppSharerForAdminScreen} />
            <Route path="/getallpaymentlistsShoper" exact component={PaymentListShoperForAdminScreen} />

            <Route path="/getallpaymentlistsAppSharerForAppSharer" exact component={PaymentListAppSharerForAppSharerScreen} />
            <Route path="/getpaymentlistsBackShopingOfferForAppSharer" exact component={PaymentListBackShoppingOfferForAppSharerScreen} />
            <Route path="/getpaymentlistsBackShoppingPromotionalForAppSharer" exact component={PaymentListBackShoppingPromotionalForAppSharerScreen} />
            <Route path="/getpaymentlistsMainAccountOfferForAppSharer" exact component={PaymentListMainAccountOfferForAppSharerScreen} />
            <Route path="/getpaymentlistsMainAccountPromotionalForAppSharer" exact component={PaymentListMainAccountPromotionalForAppSharerScreen} />
            <Route path="/getpaymentlistsTableCashOfferForAppSharer" exact component={PaymentListTableCashOfferForAppSharerScreen} />
            <Route path="/getpaymentlistsTableCashPromotionalForAppSharer" exact component={PaymentListTableCashPromotionalForAppSharerScreen} />


            <Route path="/getpaymentlistsShoperforshopper" exact component={PaymentListAllForShopperScreen} />
            <Route path="/getpaymentlistsShopertablecashoffer" exact component={PaymentListTableCashOfferFroShopperScreen} />
            <Route path="/getpaymentlistsShoperbackshoppingoffer" exact component={PaymentListBackShoppingOfferFroShopperScreen} />


            <Route path="/withdrawmoneyagenttoofarz" exact component={WithdrawMoneyAgentToOfarz} />

            <Route path="/withdrawmoneyappsharertoagent" exact component={WithdrawMoneyAppSharerToAgent} />
            <Route path="/withdrawmoneyappsharertoofarz" exact component={WithdrawMoneyAppSharerToOfarz} />

            <Route path="/withdrawmoneykarrottoofarz" exact component={WithdrawMoneyKarrotToOfarz} />
            <Route path="/withdrawmoneykarrottoagent" exact component={WithdrawMoneyKarrotToAgent} />

            <Route path="/withdrawmoneyceotoofarz" exact component={WithdrawMoneyCEOToOfarz} />
            <Route path="/withdrawmoneyceotoagent" exact component={WithdrawMoneyCEOToAgent} />

            <Route path="/withdrawlistall" exact component={WithdrawListAdminAndModeratorScreen} />
            <Route path="/withdrawlistappSharer" exact component={WithdrawListAppSharerForAdminAndModeratorScreen} />


            <Route path="/withdrawlistappsharertoagentforappsharer" exact component={WithdrawListAppSharerToAgentForAppSharerScreen} />
            <Route path="/withdrawlistappsharertoofarzforappsharer" exact component={WithdrawListAppSharerToOfarzForAppSharerScreen} />

            <Route path="/withdrawlistkarrottoagent" exact component={WithdrawListKarrotToAgentForKarrotScreen} />
            <Route path="/withdrawlistkarrottoofarz" exact component={WithdrawListKarrotToOfarzForKarrotScreen} />

            <Route path="/withdrawlistceotoagent" exact component={WithdrawListCeoToAgentForCeoScreen} />
            <Route path="/withdrawlistceotoofarz" exact component={WithdrawListCeoToOfarzForCeoScreen} />

            <Route path="/fundlistagent" exact component={FundListAgentForAdminScreen} />
            <Route path="/fundlistappsharer" exact component={FundListAppSharerForAdminScreen} />

            <Route path="/fundappsharerforadmin" exact component={FundAppSharerForAdminScreen} />
            <Route path="/fundofarzforadmin" exact component={FundOfarzForAdminScreen} />

            <Route path="/fundsharerforsharer" exact component={FundAppSharerForAppSharerScreen} />
            <Route path="/fundkarrotforkarrot" exact component={FundKarrotForKarrotScreen} />
            <Route path="/fundceoforceo" exact component={FundCEOForCEOScreen} />
            <Route path="/fundceoforAdmin" exact component={FundCeoForAdminScreen} />
            <Route path="/fundkarrotforAdmin" exact component={FundKarrotForAdminScreen} />
            <Route path="/fundshoperforshoper" exact component={FundShoperForShoperScreen} />


            <Route path="/addkarrot" exact component={KarrotRegistrationScreen} />
            <Route path="/addceo" exact component={CeoRegistrationScreen} />
            <Route path="/addofarz" exact component={OfarzRegistrationScreen} />

            <Route path="/appsharerfirstdownlinelist" exact component={FirstDownlineListForAppSharerScreen} />
            <Route path="/appsharerprofiledetails" exact component={AppSharerProfileDetailsForAppSharer} />
            <Route path="/appsharerdownlineprofiledetails/:id" exact component={AppSharerDownlineProfileDetailsForAppSharer} />
            <Route path="/appsharerseconddownlinelist/:id" exact component={SecondDownlineListForAppSharerScreen} />
            <Route path="/appsharerseconddownlinelist/appsharerthirddownlinelist/:id" exact component={ThirdDownlineListForAppSharerScreen} />
            <Route path="/appsharerseconddownlinelist/appsharerthirddownlinelist/appsharerfourthdownlinelist/:id" exact component={FourthDownlineListForAppSharerScreen} />
            <Route path="/appsharerseconddownlinelist/appsharerthirddownlinelist/appsharerfourthdownlinelist/appsharerfifthdownlinelist/:id" exact component={FifthDownlineListForAppSharerScreen} />



        </Switch>
    </Container>
);

export default RouteComponemt;

