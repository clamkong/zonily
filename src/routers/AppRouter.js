import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SplashPage from '../components/SplashPage';
import MarketPlacePage from '../components/MarketPlacePage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import PlaybookDetailsPage from '../components/PlaybookDetailsPage';
import AuthorDetails from '../components/AuthorDetails';
import MyPlaybooksPage from '../components/MyPlaybooksPage';

const AppRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <div className="app-content-container"> 
                <Switch>
                    <Route path="/" component={SplashPage} exact={true} />
                    <Route path="/marketplace" component={MarketPlacePage} />
                    <Route path="/myplaybooks" component={MyPlaybooksPage} />
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