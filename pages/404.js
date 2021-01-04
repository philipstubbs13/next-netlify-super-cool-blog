/* eslint-disable prettier/prettier */
// @ts-nocheck
// https://dev.to/netlify/making-a-custom-404-page-in-next-js-16bc
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '@components/layout/Layout';

const FourOhFour = ({ title, description }) => {
    return (
        <React.Fragment>
            <Layout pageTitle={`${title} | About`} description={description}>
                <div className="container-md d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="title text-center">404 - Page Not Found</h1>
                            <p className="mt-50 text-center">
                                Oops! The page you are looking for was either deleted, moved, or
                                does not exist.
                            </p>
                            <Link href="/">
                                <a className="mt-20">Go back home</a>
                            </Link>
                        </div>
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
            description: configData.default.description
        }
    };
}

FourOhFour.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
