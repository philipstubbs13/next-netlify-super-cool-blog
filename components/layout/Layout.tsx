/* eslint-disable prettier/prettier */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Header } from '@components/header/Header';
import { Footer } from '@components/footer/Footer';
import { initGA, logPageView } from '../../utils/analytics';

export interface IProps {
  children: ReturnType<typeof React.ReactNode>;
  pageTitle: String;
}

export const Layout = (props: IProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const containerClasses = isDarkMode ? 'dark-mode' : '';

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div className={containerClasses}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{props.pageTitle}</title>
        <link href="/halfmoon-variables.min.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/2000aec496.js" crossOrigin="anonymous"></script>
        <script defer src="/halfmoon.min.js"></script>
      </Head>
      <section className="layout">
        <Header toggleDarkMode={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />
        <div>{props.children}</div>
      </section>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
};
