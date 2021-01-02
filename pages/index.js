// @ts-nocheck
import { useState } from 'react';
import matter from 'gray-matter'
import Layout from '../components/layout/Layout'
import PostList from '../components/post-list/PostList';
import SearchFilter from '../components/search-filter/SearchFilter';

const Index = ({ posts, title, description, ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchPosts = (event) => {
    event.preventDefault();
  
    const postsToFilter = [...posts];
    let postsToDisplay = postsToFilter;

    if (searchTerm.trim().length) {
      postsToDisplay = postsToFilter.filter(post => post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.frontmatter.author.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredPosts(postsToDisplay);
  };

  const handleChangeSearchFilter = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Layout pageTitle={title}>
      <div className="container-fluid">
        <div className="card">
          <div className="row">
              <div className="col-12">
                <h1 className="title">chillin' with phil</h1>
              </div>
              <div className="col-12">
                <p className="description">
                  {description}
                </p>
              </div>
            </div>
          </div>
      </div>
      <main>
        
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
             <PostList posts={filteredPosts} />
          </div>
          <div className="col-4">
            <div className="card">
              <h2 className="card-title">
                Search
              </h2>
              <SearchFilter
                handleChange={handleChangeSearchFilter}
                handleSubmit={handleSearchPosts}
                placeholder="Search posts by title or author"
              />
            </div>
          </div>
        </div>
      </div>
      </main>
    </Layout>)
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}