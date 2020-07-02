import React from 'react';
import { Link } from 'react-router-dom';

// svg imports as react components
import { ReactComponent as Logo } from '../../assets/crown.svg';

// styling 
import './header.styles.scss';


const Header = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className='option'>SHOP</Link>
            <Link to="/shop" className='option'>CONTACT</Link>
            
        </div>
    </div>
)

export default Header;


