// @ts-nocheck
import { useState } from 'react';
import PropTypes from 'prop-types';
import matter from 'gray-matter';
import { Layout } from '@components/layout/Layout';
import { PostList } from '@components/post-list/PostList';
import { SearchFilter } from '@components/search-filter/SearchFilter';

export interface IProps {
  description: String;
  title: String;
  posts: any[];
}

const Index = (props: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(props.posts);

  const handleSearchPosts = (event) => {
    event.preventDefault();

    const postsToFilter = [...props.posts];
    let postsToDisplay = postsToFilter;

    if (searchTerm.trim().length) {
      postsToDisplay = postsToFilter.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.frontmatter.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(postsToDisplay);
  };

  const handleChangeSearchFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout pageTitle={props.title}>
      <div className="container-fluid">
        <div className="card">
          <div className="row">
            <div className="col-12">
              <h1 className="title">chillin&apos; with phil</h1>
            </div>
            <div className="col-12">
              <p className="description">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <PostList posts={filteredPosts} searchTerm={searchTerm} />
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="card">
                <h2 className="card-title">Search</h2>
                <SearchFilter
                  handleChange={handleChangeSearchFilter}
                  handleSubmit={handleSearchPosts}
                  placeholder="Search posts by title or author"
                />
              </div>
              <div className="card">
                <h2 className="card-title">Share Your Feedback</h2>
                <p>Found a bug? Have a suggestion? Want to collab?</p>
                <p>
                  Send me an{' '}
                  <a href="mailto:philipstubbs13@gmail.com" target="_blank" rel="noreferrer">
                    email
                  </a>
                  , and I&apos;ll take a look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};
