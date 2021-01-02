// @ts-nocheck
import Post from '@components/post/Post';

export default function PostList({ posts, searchTerm }) {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts || !posts.length && 
        <div className="card">
          <p className="font-size-20">
            No search results found.
          </p>
          <p className="text-primary font-size-18">
            We could not find any posts related to "{searchTerm}". Please try another search.
          </p>
        </div>
      }
      <ul>
        {posts &&
          posts.map((post) => {
            const tags = post.frontmatter.tags ? post.frontmatter.tags.split(',') : [];

            return (
              <Post
                title={post.frontmatter.title}
                author={post.frontmatter.author}
                slug={post.slug}
                key={post.slug}
                tags={tags}
                date={post.frontmatter.date}
                markdownBody={post.markdownBody}
              />
            )
          })}
      </ul>
    </div>
  )
}