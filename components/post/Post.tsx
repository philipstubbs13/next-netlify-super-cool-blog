// @ts-nocheck
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

export interface IProps {
  author: String;
  date: String;
  markdownBody: String;
  slug: String;
  tags: String[];
  title: String;
}

export const Post = (props: IProps) => {
  return (
    <div className="card mt-100">
      <h2 className="card-title">{props.title}</h2>
      <span className="text-muted">By: {props.author}</span>
      <span className="text-muted d-block">
        <FontAwesomeIcon icon={faClock} style={{ width: 10 }} />{' '}
        {dayjs(props.date).format('MMM D, YYYY')}
      </span>
      <p>{props.markdownBody.substr(0, 600)}</p>
      <div className="mt-20 border-top">
        {props.tags &&
          props.tags.length &&
          props.tags.map((tag) => {
            return (
              <span key={tag} className="badge badge-primary badge-pill px-20 py-5 mr-10 mt-20">
                #{tag}
              </span>
            );
          })}
      </div>
      <div className="text-right">
        <Link href={{ pathname: `/post/${props.slug}` }}>
          <button className="btn btn-link">Read more</button>
        </Link>
      </div>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  markdownBody: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
