import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    const activeStyle = {color : "orange"};
    return (
        <nav>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <NavLink activeStyle={activeStyle} exact to="/">
                Home
            </NavLink>
            |
            <NavLink activeStyle={activeStyle} to="/courses">
                Courses
            </NavLink>
            |
            <NavLink activeStyle={activeStyle} to="/about">
                About
            </NavLink>
        </nav>
    )
}

export default Header;
