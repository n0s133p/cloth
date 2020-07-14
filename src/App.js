import React, { Component, useRef } from 'react';

// pages
import Homepage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/sign-in-sign-out-page/sign-in-sign-out.component';

import { Route, Switch } from 'react-router-dom';

import './App.css';

// whole app needs to have access to authentication
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

    constructor() {
        super(); 

        this.state = {
            currentUser : null
        }
    }

    unsubscribeFromAuth = null;
    
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {        
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => {
                        console.log(this.state);
                    });
                });
                
            } else {
                this.setState({
                    currentUser: userAuth
                })
            }
            
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