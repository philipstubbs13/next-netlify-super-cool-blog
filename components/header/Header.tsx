import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from '@components/nav-link/NavLink';

export interface IProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = (props: IProps) => {
  const toggleModeButtonIcon = props.isDarkMode ? faSun : faMoon;

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink slug="/" title="chillin' with phil" />
        <div className="ml-auto d-flex align-items-center">
          <button className="btn mr-20" onClick={props.toggleDarkMode}>
            <FontAwesomeIcon icon={toggleModeButtonIcon} style={{ width: 15 }} />
          </button>
          <NavLink slug="/about" title="About" />
          <NavLink slug="/contribute" title="Contribute" />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
