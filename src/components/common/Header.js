import React from "react";

function Header() {
    return (
        <nav>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="/">Home</a> | <a href="/courses">Courses</a> |
            <a href="/about">About</a>
        </nav>
    )
}

export default Header;
