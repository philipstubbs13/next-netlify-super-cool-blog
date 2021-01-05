/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-has-content */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

const HelpTopic = ({ children, topicTitle, anchorTag }) => {
    return (
        <section className="border-top" style={{ marginTop: 50 }}>
            <a name={anchorTag}></a>
            <h3>{topicTitle}</h3>
            {children}
        </section>
    );
};

export default HelpTopic;

HelpTopic.propTypes = {
    anchorTag: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    topicTitle: PropTypes.string.isRequired
};
