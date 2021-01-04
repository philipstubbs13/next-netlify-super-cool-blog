// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import '@components/search-filter/SearchFilter.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.shape({
        siteTitle: PropTypes.string,
        postname: PropTypes.string,
        markdownBody: PropTypes.string,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        })
    })
};
