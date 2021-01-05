/* eslint-disable prettier/prettier */
// https://dev.to/netlify/making-a-custom-404-page-in-next-js-16bc
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout } from '@components/layout/Layout';

export interface IProps {
  description: String;
  title: String;
}

const FourOhFour = (props: IProps) => {
  return (
    <React.Fragment>
      <Layout pageTitle={`${props.title}`} description={props.description}>
        <div className="container" style={{ width: '50%' }}>
          <div className="d-flex flex-column">
            <h1 className="title text-center">404 - Page Not Found</h1>
            <p className="mt-50 text-center">
              Oops! The page you are looking for was either deleted, moved, or does not exist.
            </p>
            <p className="mt-20 text-center">
              Double check that the url is correct or try heading back to the home page.
            </p>
            <p className="text-center">
              <Link href="/">
                <button className="btn btn-primary mt-20" style={{ width: '25%' }}>
                  Go back home
                </button>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default FourOhFour;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

FourOhFour.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
