// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout/Layout';

export default function BlogPost({ siteTitle, frontmatter, markdownBody, postname }) {
    if (!frontmatter) return <></>;

    // https://css-tricks.com/simple-social-sharing-links/
    const postUrl = `https://chillinwithphil.com/post/${postname}`;
    const titleText = frontmatter.title.substr(0, 60);
    const tweetHashtags = frontmatter.tags;
    const tweetUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${titleText}&hashtags=${tweetHashtags}`;
    const facebookUrl = `https://www.facebook.com/sharer.php?u=${postUrl}`;

    return (
        <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
            <div className="container-md mt-20">
                <Link href="/">
                    <button className="btn btn-link btn-lg px-0">Back to posts</button>
                </Link>
                <article>
                    <h1>{frontmatter.title}</h1>
                    <p>By {frontmatter.author}</p>
                    <div>
                        <ReactMarkdown source={markdownBody} />
                    </div>
                </article>
                <div className="border-top">
                    <p className="font-size-18">Share to:</p>
                    <div className="d-flex">
                        <button className="btn btn-lg btn-link" href={tweetUrl} target="_blank">
                            <i className="fab fa-twitter text-primary" /> Twitter
                        </button>
                        <a
                            className="btn-lg btn-link"
                            href={facebookUrl}
                            target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-facebook text-primary" /> Facebook
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params;

    const content = await import(`../../posts/${postname}.md`);
    const config = await import(`../../siteconfig.json`);
    const data = matter(content.default);

    return {
        props: {
            siteTitle: config.title,
            frontmatter: data.data,
            postname: postname,
            markdownBody: data.content
        }
    };
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        const keys = context.keys();
        const data = keys.map((key) => {
            let slug = key.replace(/^.*[\\/]/, '').slice(0, -3);

            return slug;
        });
        return data;
    })(require.context('../../posts', true, /\.md$/));

    const paths = blogSlugs.map((slug) => `/post/${slug}`);

    return {
        paths,
        fallback: false
    };
}

BlogPost.propTypes = {
    siteTitle: PropTypes.string,
    postname: PropTypes.string,
    markdownBody: PropTypes.string,
    frontmatter: PropTypes.shape({
        title: PropTypes.string,
        tags: PropTypes.string,
        author: PropTypes.string
    })
};
