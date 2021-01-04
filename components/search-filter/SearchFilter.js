// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchFilter = ({ handleChange, handleSubmit, placeholder }) => {
    return (
        <form className="form-inline">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    required="required"
                    onChange={handleChange}
                />
                <div className="input-group-append">
                    <button className="btn" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchFilter;

SearchFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
};
