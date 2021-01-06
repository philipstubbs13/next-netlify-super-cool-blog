import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IProps {
  icon: any;
  url: any;
}

export const SocialButton = (props: IProps) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={props.icon} className="text-primary mr-20" style={{ width: 20 }} />
    </a>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
