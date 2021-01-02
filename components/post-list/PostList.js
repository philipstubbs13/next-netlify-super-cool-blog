// @ts-nocheck
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock } from '@fortawesome/free-solid-svg-icons';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <div className="card mt-100" key={post.slug}>
                <h2 className="card-title">
                  {post.frontmatter.title}
                </h2>
                <p>
                  {post.markdownBody.substr(0, 600)}
                </p>
                <div>
                  <span className="text-muted">
                     <FontAwesomeIcon icon={faClock} style={{ width: 10 }} /> {post.frontmatter.date}
                  </span>
                </div>
                <div className="mt-10">
                  <span className="text-muted">
                    By: {post.frontmatter.author}
                  </span>
                </div>
                <div className="text-right">
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a className="btn btn-link">Read more</a>
                  </Link>
                </div>
              </div>
            )
          })}
      </ul>
    </div>
  )
}