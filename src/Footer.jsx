import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return<>
        <footer className='footer'>
            <p>copyright Ⓟ {year} @ DEEPAK DHAKER</p>
        </footer>
    </>
}

export default Footer;