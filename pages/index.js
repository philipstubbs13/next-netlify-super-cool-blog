// @ts-nocheck
import matter from 'gray-matter'
import Layout from '../components/layout/Layout'
import PostList from '../components/post-list/PostList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons';

const Index = ({ posts, title, description, ...props }) => {
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
             <PostList posts={posts} />
          </div>
          <div className="col-4">
            <div className="card">
              <h2 className="card-title">
                Search
              </h2>
              <form className="form-inline" action="..." method="...">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search posts" required="required" />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <FontAwesomeIcon icon={faSearch} style={{ width: 15 }} />
                      <span className="sr-only">Search docs</span>
                    </button>
                  </div>
                </div>
              </form>
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