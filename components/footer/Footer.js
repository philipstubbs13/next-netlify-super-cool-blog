// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
    faTiktok,
    faTwitter,
    faFacebook,
    faGithub,
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import SocialButton from '@components/social-button/SocialButton';

export default function Footer({ isDarkMode }) {
    const containerClasses = isDarkMode
        ? 'page-wrapper with-navbar-fixed-bottom dark-mode'
        : 'page-wrapper with-navbar-fixed-bottom';
    const copyrightYear = new Date().getFullYear();
    const copyrightText = `${copyrightYear} chillin' with phil`;

    return (
        <div className={containerClasses}>
            <nav className="navbar navbar-fixed-bottom h-50">
                <div className="navbar-content">
                    <Link href="/">
                        <button className="btn-link btn btn-lg mr-20">Home</button>
                    </Link>
                    <Link href="/about">
                        <button className="btn-link btn btn-lg mr-20">About</button>
                    </Link>
                </div>
                <div className="ml-auto">
                    <SocialButton url="https://www.tiktok.com/@thephilstubbs" icon={faTiktok} />
                    <SocialButton url="https://twitter.com/iamPhilStubbs" icon={faTwitter} />
                    <SocialButton
                        url="https://www.linkedin.com/in/philipjstubbs/"
                        icon={faLinkedin}
                    />
                    <SocialButton url="https://github.com/philipstubbs13" icon={faGithub} />
                    <SocialButton
                        url="https://www.instagram.com/philipstubbs13/"
                        icon={faInstagram}
                    />
                    <SocialButton url="https://www.facebook.com/phil.stubbs.13" icon={faFacebook} />
                </div>
                <span className="navbar-text ml-auto">&copy; {copyrightText}</span>
            </nav>
        </div>
    );
}

Footer.propTypes = {
    isDarkMode: PropTypes.bool.isRequired
};
