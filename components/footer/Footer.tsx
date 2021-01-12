import PropTypes from 'prop-types';
import {
  faTiktok,
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { SocialButton } from '../social-button/SocialButton';
import { NavLink } from '@components/nav-link/NavLink';
import { BLOG_TITLE, PageTitles, PageRoutes, SocialLinks } from '../../constants';

export interface IProps {
  isDarkMode: boolean;
}

export const Footer = (props: IProps) => {
  const containerClasses = props.isDarkMode
    ? 'page-wrapper with-navbar-fixed-bottom dark-mode'
    : 'page-wrapper with-navbar-fixed-bottom';
  const copyrightYear = new Date().getFullYear();
  const copyrightText = `${copyrightYear} ${BLOG_TITLE}`;

  return (
    <div className={containerClasses}>
      <nav className="navbar navbar-fixed-bottom h-50">
        <div className="navbar-content d-none d-md-block">
          <NavLink slug={PageRoutes.Home} title={PageTitles.Home} />
          <NavLink slug={PageRoutes.About} title={PageTitles.About} />
          <NavLink slug={PageRoutes.Contribute} title={PageTitles.Contribute} />
        </div>
        <div className="ml-auto dropdown dropup with-arrow">
          <button
            className="btn"
            data-toggle="dropdown"
            type="button"
            id="social-links-dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Connect With Me
          </button>
          <div className="dropdown-menu d-flex" aria-labelledby="...">
            <SocialButton url={SocialLinks.Tiktok} icon={faTiktok} />
            <SocialButton url={SocialLinks.Twitter} icon={faTwitter} />
            <SocialButton url={SocialLinks.Linkedin} icon={faLinkedin} />
            <SocialButton url={SocialLinks.Github} icon={faGithub} />
            <SocialButton url={SocialLinks.Instagram} icon={faInstagram} />
            <SocialButton url={SocialLinks.Facebook} icon={faFacebook} />
          </div>
        </div>
        <span className="navbar-text ml-auto">&copy; {copyrightText}</span>
      </nav>
    </div>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
