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

export interface IProps {
  isDarkMode: boolean;
}

export const Footer = (props: IProps) => {
  const containerClasses = props.isDarkMode
    ? 'page-wrapper with-navbar-fixed-bottom dark-mode'
    : 'page-wrapper with-navbar-fixed-bottom';
  const copyrightYear = new Date().getFullYear();
  const copyrightText = `${copyrightYear} chillin' with phil`;

  return (
    <div className={containerClasses}>
      <nav className="navbar navbar-fixed-bottom h-50">
        <div className="navbar-content d-none d-md-block">
          <NavLink slug="/" title="Home" />
          <NavLink slug="/about" title="About" />
          <NavLink slug="/contribute" title="Contribute" />
        </div>
        <div className="ml-auto">
          <SocialButton url="https://www.tiktok.com/@thephilstubbs" icon={faTiktok} />
          <SocialButton url="https://twitter.com/iamPhilStubbs" icon={faTwitter} />
          <SocialButton url="https://www.linkedin.com/in/philipjstubbs/" icon={faLinkedin} />
          <SocialButton url="https://github.com/philipstubbs13" icon={faGithub} />
          <SocialButton url="https://www.instagram.com/philipstubbs13/" icon={faInstagram} />
          <SocialButton url="https://www.facebook.com/phil.stubbs.13" icon={faFacebook} />
        </div>
        <span className="navbar-text ml-auto">&copy; {copyrightText}</span>
      </nav>
    </div>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
