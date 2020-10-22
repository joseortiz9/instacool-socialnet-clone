import React from 'react';
import { Route } from "react-router";

import Login from "./containers/auth/login.container";
import Register from "./containers/auth/register.container";
import NewsFeed from "./containers/NewsFeed";
import Navbar from "./components/navbar.comp";
import Profile from "./containers/profile";
import services from "./services";
import { History } from 'history';

interface IAppProps {
    history: History
}

class App extends React.Component<IAppProps> {
    public state = {
        loading: true,
    }

    public componentDidMount() {
        const { fireAuth } = services;
        const { history } = this.props;
        fireAuth.onAuthStateChanged(user => {
            if (user) {
                if (['/', 'register'].indexOf(history.location.pathname) > -1) {
                    history.push('/app/newsfeed')
                }
            } else {
                // /app/*
                if (/\app\/./.test(history.location.pathname)) {
                    history.push('/')
                }
            }
            this.setState({
                loading: false
            })
        });
    }

    public render() {
        const { loading } = this.state
        return (
            loading ? 'Loading' :
                <div className="App">
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route path='/app' component={Navbar} />
                    <Route exact path='/app/newsfeed' component={NewsFeed} />
                    <Route exact path='/app/profile' component={Profile} />
                </div>
        );
    }
}

export default App;
