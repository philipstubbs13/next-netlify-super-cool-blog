// @ts-nocheck
import { useState } from 'react';
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer';

export default function Layout({ children, pageTitle, ...props }) {
  const [darkMode, setDarkMode] = useState(true);
  const containerClasses = darkMode ? "dark-mode" : "";

  return (
    <div className={containerClasses}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link href="/halfmoon-variables.min.css" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/2000aec496.js" crossorigin="anonymous"></script>
        <script defer src="/halfmoon.min.js"></script>
      </Head>
      <section className="layout">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <div>{children}</div>
      </section>
      <Footer darkMode={darkMode} />
    </div>
  )
}