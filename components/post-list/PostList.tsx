import PropTypes from 'prop-types';
import { Post } from '../post/Post';

export interface IProps {
  posts: PostItem[] | 'undefined';
  searchTerm: String;
}

export interface PostItem {
  frontmatter: {
    author: String;
    date: String;
    tags: String;
    title: String;
  };
  markdownBody: String;
  slug: String;
}

export const PostList = (props: IProps) => {
  if (props.posts === 'undefined') return null;

  return (
    <div>
      {!props.posts ||
        (!props.posts.length && (
          <div className="card">
            <p className="font-size-20">No search results found.</p>
            <p className="text-primary font-size-18">
              We could not find any posts related to &quot;{props.searchTerm}&quot;. Please try
              another search.
            </p>
          </div>
        ))}
      <ul>
        {props.posts &&
          props.posts.map((post) => {
            const tags = post.frontmatter.tags ? post.frontmatter.tags.split(',') : [];

            return (
              <Post
                title={post.frontmatter.title}
                author={post.frontmatter.author}
                slug={post.slug}
                key={post.slug as string}
                tags={tags}
                date={post.frontmatter.date}
                markdownBody={post.markdownBody}
              />
            );
          })}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
      markdownBody: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
  searchTerm: PropTypes.string.isRequired,
};
