import React, { Component } from 'react';

// pages
import Homepage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-sign-out-page/sign-in-sign-out.component';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import { auth } from './firebase/firebase.utils';

class App extends Component {

    constructor() {
        super(); 

        this.state = {
            currentUser : null
        }
    }

    unsubscribeFromAuth = null;
    
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser : user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/signin' component={SignInSignOut}/>
                    <Route path='/shop' component={ShopPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;