import React from 'react';
import { Link } from 'react-router-dom';

// auth 
// import { auth } from '../../firebase/firebase.utils';

// svg imports as react components
import { ReactComponent as Logo } from '../../assets/crown.svg';

// styling 
import './header.styles.scss';

import userSignOut from './userSingOut';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className='option'>SHOP</Link>
            <Link to="/shop" className='option'>CONTACT</Link>          
            {
                currentUser ?
                <div className="option" onClick={userSignOut}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='signin'>
                    SIGN IN
                </Link>
            } 
        </div>
    </div>
)

export default Header;


