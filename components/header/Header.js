// @ts-nocheck
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header({ toggleDarkMode, darkMode }) {
  const toggleModeButtonIcon = darkMode ? faSun : faMoon;

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link href="/">
            <a href="#" className="navbar-brand">
              chillin' with phil
            </a>
          </Link>
          <div className="ml-auto d-flex">
            <button className="btn mr-20" onClick={toggleDarkMode}>
               <FontAwesomeIcon icon={toggleModeButtonIcon} style={{ width: 15 }}  />
            </button>
            <div className="mr-20">
              <Link href="/about">
                <a href="#" className="navbar-brand">
                  About
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}