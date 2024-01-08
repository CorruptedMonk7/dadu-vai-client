import React from 'react';
import logo from '../../../../Asset/dadu-logo.png'

const Footer = () => {
    return (
        <footer className="footer px-10 py-32 text-white bg-neutral text-base-content">
            <aside>
                <img width="300" height="50" src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;