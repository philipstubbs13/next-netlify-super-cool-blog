// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

export default function Post({ title, date, author, tags, markdownBody, slug }) {
    return (
        <div className="card mt-100">
            <h2 className="card-title">{title}</h2>
            <span className="text-muted">By: {author}</span>
            <span className="text-muted d-block">
                <FontAwesomeIcon icon={faClock} style={{ width: 10 }} />{' '}
                {dayjs(date).format('MMM D, YYYY')}
            </span>
            <p>{markdownBody.substr(0, 600)}</p>
            <div className="mt-20 border-top">
                {tags &&
                    tags.length &&
                    tags.map((tag) => {
                        return (
                            <span
                                key={tag}
                                className="badge badge-primary badge-pill px-20 py-5 mr-10 mt-20">
                                #{tag}
                            </span>
                        );
                    })}
            </div>
            <div className="text-right">
                <Link href={{ pathname: `/post/${slug}` }}>
                    <button className="btn btn-link">Read more</button>
                </Link>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    markdownBody: PropTypes.node.isRequired,
    slug: PropTypes.string.isRequired
};
