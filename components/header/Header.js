// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header({ toggleDarkMode, isDarkMode }) {
    const toggleModeButtonIcon = isDarkMode ? faSun : faMoon;

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <Link href="/">
                        <button className="navbar-brand btn btn-link">
                            chillin&apos; with phil
                        </button>
                    </Link>
                    <div className="ml-auto d-flex">
                        <button className="btn mr-20" onClick={toggleDarkMode}>
                            <FontAwesomeIcon icon={toggleModeButtonIcon} style={{ width: 15 }} />
                        </button>
                        <div className="mr-20">
                            <Link href="/about">
                                <button className="navbar-brand btn btn-link">About</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

Header.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool
};
