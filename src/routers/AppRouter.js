import React from "react";
import { subscribe } from "react-contextual";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MarketplacePage from "../components/MarketplacePage/MarketplacePage";
import AboutPage from "../components/AboutPage/AboutPage";
import PlaybookDetailsPage from "../components/PlaybookDetailsPage/PlaybookDetailsPage";
import AuthorDetails from "../components/AuthorDetails/AuthorDetails";
import MyPlaybooksPage from "../components/MyPlaybooksPage/MyPlaybooksPage";
import MyCartPage from "../components/MyCartPage/MyCartPage";
import Splash from "../components/SplashPage/Splash";
import Preorder from "../components/PreorderPage/PreorderPage";
import PrivacyPolicyPage from "../components/PrivacyPolicyPage/PrivacyPolicyPage";
import Header from '../components/Header/Header';

const AppRouter = subscribe()(({ user }) => {
  console.log(user);
  return (
    <BrowserRouter>
      <div className="App">
        {user.isAuthenticated ? (
          <div className="main-app">
            <Header />
            <Switch>
              <Route path="/" component={MarketplacePage} exact={true} />
              <Route path="/privacy" component={PrivacyPolicyPage} />
              <Route path="/preorder" component={Preorder} />
              <Route path="/marketplace" component={MarketplacePage} />
              <Route path="/myplaybooks" component={MyPlaybooksPage} />
              <Route path="/cart" component={MyCartPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/sandbox" component={AuthorDetails} />
              <Route path="/playbook/:pId" component={PlaybookDetailsPage} />
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        ) : (
          <Switch>
            <Route path="/" component={Splash} exact={true} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/preorder" component={Preorder} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
});

export default AppRouter;
