import React from 'react';

// pages
import Homepage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

import { Route, Switch } from 'react-router-dom';

import './App.css';


const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;