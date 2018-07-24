import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SplashPage from '../components/SplashPage/SplashPage';
import MarketplacePage from '../components/MarketplacePage/MarketplacePage';
import Header from '../components/Header/Header';
import AboutPage from '../components/AboutPage/AboutPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignupPage from '../components/SignupPage/SignupPage';
import PlaybookDetailsPage from '../components/PlaybookDetailsPage/PlaybookDetailsPage';
import AuthorDetails from '../components/AuthorDetails/AuthorDetails';
import MyPlaybooksPage from '../components/MyPlaybooksPage/MyPlaybooksPage';
import MyCartPage from '../components/MyCartPage/MyCartPage';

const AppRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <div className="app-content-container">
                <Switch>
                    <Route path="/" component={SplashPage} exact={true} />
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
        </div>
    </BrowserRouter>
);


// <Route path="/" component={ExpenseDashboardPage} exact={true} />
// <Route path="/create" component={AddExpensePage} />
// <Route path="/edit/:id" component={EditExpensePage} />
// <Route path="/help" component={HelpPage} />
// <Route component={NotFoundPage} />
export default AppRouter;