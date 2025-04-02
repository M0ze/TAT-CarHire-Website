import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Car Hire Service</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cars">Available Cars</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;