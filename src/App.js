import React from 'react';

// pages
import Homepage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shoppage/shoppage.component';

import { Route } from 'react-router-dom';

import './App.css';


const App = () => {
    return (
        <div>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
        </div>
    );
}

export default App;