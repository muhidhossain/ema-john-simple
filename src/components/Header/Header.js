import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';


const Header = () => {
    const auth = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                    auth.user && <span style={{ color: 'yellow' }}>Welcome {auth.user.name}</span>
                }
                {
                    auth.user ?
                        <a href="/login"> Sign Out</a>
                        : <a href="/login">Sign in</a>
                }
            </nav>
        </div>
    );
};

export default Header;