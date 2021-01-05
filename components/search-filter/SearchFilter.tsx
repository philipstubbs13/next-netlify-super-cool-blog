import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface IProps {
  handleChange: () => void;
  handleSubmit: () => void;
  placeholder: any;
}

export const SearchFilter = (props: IProps) => {
  return (
    <form className="form-inline">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={props.placeholder}
          required={true}
          onChange={props.handleChange}
        />
        <div className="input-group-append">
          <button className="btn" onClick={props.handleSubmit}>
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          </button>
        </div>
      </div>
    </form>
  );
};

SearchFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
