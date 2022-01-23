import React from 'react';

const Header = (props) => {
    return (
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/">Cart</a> <a href="#/">Signin</a>
            </div>
        </header>
    )
}

export default Header;