import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MarketplacePage from '../components/MarketplacePage/MarketplacePage';
// import Header from '../components/Header/Header';
import AboutPage from '../components/AboutPage/AboutPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignupPage from '../components/SignupPage/SignupPage';
import PlaybookDetailsPage from '../components/PlaybookDetailsPage/PlaybookDetailsPage';
import AuthorDetails from '../components/AuthorDetails/AuthorDetails';
import MyPlaybooksPage from '../components/MyPlaybooksPage/MyPlaybooksPage';
import MyCartPage from '../components/MyCartPage/MyCartPage';
import Splash from '../components/SplashPage/Splash';
import Preorder from '../components/PreorderPage/PreorderPage'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage/PrivacyPolicyPage';

const AppRouter = () => (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route path="/" component={Splash} exact={true} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/preorder" component={Preorder} />
            <Route path="/marketplace" component={MarketplacePage} />
            <Route path="/myplaybooks" component={MyPlaybooksPage} />
            <Route path="/cart" component={MyCartPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/sandbox" component={AuthorDetails} />
            <Route path="/playbook/:pId" component={PlaybookDetailsPage} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
