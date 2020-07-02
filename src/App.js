import React from 'react';
import Homepage from './pages/homepage/homepage.component'; 

import { Route } from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>Hello From HatsPage</h1>
    </div>
);

const App = () => {
    return (
        <div>
            <Route exact path='/' component={Homepage}/>
            <Route path='/hats' component={HatsPage}/>
        </div>
    );
}

export default App;