// @ts-nocheck
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export interface IProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = (props: IProps) => {
  const toggleModeButtonIcon = props.isDarkMode ? faSun : faMoon;

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link href="/">
            <button className="navbar-brand btn btn-link">chillin&apos; with phil</button>
          </Link>
          <div className="ml-auto d-flex">
            <button className="btn mr-20" onClick={props.toggleDarkMode}>
              <FontAwesomeIcon icon={toggleModeButtonIcon} style={{ width: 15 }} />
            </button>
            <div className="mr-20">
              <Link href="/about">
                <button className="navbar-brand btn btn-link">About</button>
              </Link>
            </div>
            <div className="mr-20">
              <Link href="/contribute">
                <button className="navbar-brand btn btn-link">Contribute</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
