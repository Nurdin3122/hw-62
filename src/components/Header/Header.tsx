import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="header">
                <NavLink to="/" className="logo">Tolman Stroy</NavLink>
            </div>
        </>
    );
};

export default Header;