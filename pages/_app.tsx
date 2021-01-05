import React from 'react';
import PropTypes from 'prop-types';
import '@components/search-filter/SearchFilter.css';
import './contribute.css';

export interface IProps {
  frontmatter: {
    author: String;
    date: String;
    tags: String;
    title: String;
  };
  markdownBody: String;
  postname: String;
  siteTitle: String;
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    frontmatter: PropTypes.shape({
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    markdownBody: PropTypes.string,
    postname: PropTypes.string,
    siteTitle: PropTypes.string,
  }),
};
