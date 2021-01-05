// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from '@components/layout/Layout';

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

const BlogPost = (props: IProps) => {
  if (!props.frontmatter) return <></>;

  // https://css-tricks.com/simple-social-sharing-links/
  const postUrl = `https://chillinwithphil.com/post/${props.postname}`;
  const titleText = props.frontmatter.title.substr(0, 60);
  const tweetHashtags = props.frontmatter.tags;
  const tweetUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${titleText}&hashtags=${tweetHashtags}`;
  const facebookUrl = `https://www.facebook.com/sharer.php?u=${postUrl}`;

  return (
    <Layout pageTitle={`${props.siteTitle} | ${props.frontmatter.title}`}>
      <div className="container-md mt-20">
        <Link href="/">
          <button className="btn btn-link btn-lg px-0">Back to posts</button>
        </Link>
        <article>
          <h1>{props.frontmatter.title}</h1>
          <p>By {props.frontmatter.author}</p>
          <div>
            <ReactMarkdown source={props.markdownBody} />
          </div>
        </article>
        <div className="border-top">
          <p className="font-size-18">Share to:</p>
          <div className="d-flex">
            <a className="btn-lg btn-link" href={tweetUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-primary mr-10"
                style={{ width: 20 }}
              />
              Twitter
            </a>
            <a className="btn-lg btn-link" href={facebookUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-primary mr-10"
                style={{ width: 20 }}
              />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

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
      markdownBody: data.content,
    },
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
    fallback: false,
  };
}

BlogPost.propTypes = {
  frontmatter: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  markdownBody: PropTypes.string.isRequired,
  postname: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
};
