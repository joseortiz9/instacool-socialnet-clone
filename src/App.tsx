import React from 'react';
import { Route } from "react-router";

import Login from "./containers/auth/login.container";
import Register from "./containers/auth/register.container";
import NewsFeed from "./containers/NewsFeed";
import Navbar from "./components/navbar.comp";
import Profile from "./containers/profile";

function App() {
    return (
        <div className="App">
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/app' component={Navbar} />
            <Route exact path='/app/newsfeed' component={NewsFeed} />
            <Route exact path='/app/profile' component={Profile} />
        </div>
    );
}

export default App;
