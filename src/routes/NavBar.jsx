import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <Link to='/Home'>Home</Link>
            <span>    </span>
            <Link to='/Auth'>Auth</Link>
        </div>
    );
};

export default NavBar;