import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from '@components/nav-link/NavLink';
import { BLOG_TITLE, PageTitles, PageRoutes } from '../../constants';

export interface IProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header = (props: IProps) => {
  const toggleModeButtonIcon = props.isDarkMode ? faSun : faMoon;

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink slug={PageRoutes.Home} title={BLOG_TITLE} />
        <div className="ml-auto d-flex align-items-center">
          <button className="btn mr-20" onClick={props.toggleDarkMode}>
            <FontAwesomeIcon icon={toggleModeButtonIcon} style={{ width: 15 }} />
          </button>
          <div className="hidden-sm-and-down">
            <NavLink slug={PageRoutes.About} title="About" />
          </div>
          <div className="hidden-sm-and-down">
            <NavLink slug={PageRoutes.Contribute} title="Contribute" />
          </div>
          <li className="nav-item dropdown with-arrow hidden-md-and-up d-xs-block d-sm-block">
            <a className="nav-link" data-toggle="dropdown" id="nav-link-dropdown-toggle">
              <FontAwesomeIcon icon={faBars} className="text-primary mr-20" style={{ width: 20 }} />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="nav-link-dropdown-toggle">
              <div className="dropdown-item">
                <NavLink slug={PageRoutes.About} title={PageTitles.About} />
              </div>
              <div className="dropdown-item">
                <NavLink slug={PageRoutes.Contribute} title={PageTitles.Contribute} />
              </div>
            </div>
          </li>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
