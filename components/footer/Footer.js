// @ts-nocheck
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faTwitter, faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer({ darkMode }) {
  const containerClasses = darkMode ? "page-wrapper with-navbar-fixed-bottom dark-mode" : "page-wrapper with-navbar-fixed-bottom";

  return (
    <div className={containerClasses}>
      <nav className="navbar navbar-fixed-bottom h-50">
        <div className="navbar-content">
          <Link href="/">
            <a href="#" className="btn-link btn-lg mr-20">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a href="#" className="btn-link btn-lg mr-20">
              About
            </a>
          </Link>
        </div>
        <div className="ml-auto">
          <a href="https://www.tiktok.com/@thephilstubbs" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="text-primary mr-20" style={{ width: 20 }}  />
          </a>
          <a href="https://twitter.com/iamPhilStubbs" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-primary mr-20" style={{ width: 20 }}  />
          </a>
          <a href="https://www.facebook.com/phil.stubbs.13" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebook} className="text-primary mr-20" style={{ width: 20 }}  />
          </a>
          <a href="https://www.linkedin.com/in/philipjstubbs/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-primary mr-20" style={{ width: 20 }}  />
          </a>
          <a href="https://github.com/philipstubbs13" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faGithub} className="text-primary mr-20" style={{ width: 20 }}  />
          </a>
          <a href="https://www.instagram.com/philipstubbs13/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faInstagram} className="text-primary mr-20" style={{ width: 20 }}  />
          </a>
        </div>
        <span className="navbar-text ml-auto">
          &copy; 2021 chillin' with phil
        </span>
      </nav>
    </div>
  )
}