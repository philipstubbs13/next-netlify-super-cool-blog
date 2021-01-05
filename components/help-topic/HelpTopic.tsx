/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-has-content */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

export interface IProps {
  anchorTag: any;
  children: any;
  topicTitle: String;
}

export const HelpTopic = (props: IProps) => {
  return (
    <section className="border-top" style={{ marginTop: 50 }}>
      <a name={props.anchorTag}></a>
      <h3>{props.topicTitle}</h3>
      {props.children}
    </section>
  );
};

export default HelpTopic;

HelpTopic.propTypes = {
  anchorTag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  topicTitle: PropTypes.string.isRequired,
};
