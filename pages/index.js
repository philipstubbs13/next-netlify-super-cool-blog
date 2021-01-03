// @ts-nocheck
import { useState } from 'react';
import matter from 'gray-matter'
import Layout from '@components/layout/Layout'
import PostList from '@components/post-list/PostList';
import SearchFilter from '@components/search-filter/SearchFilter';
import Radio from '@components/radio/Radio';

const Index = ({ posts, title, description, isConnected }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
   const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    type: 'bug',
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/feedback', {
      method: 'post',
      body: JSON.stringify(values)
    })
    
    if (res.status === 200) {
      setValues({
        name: '',
        email: '',
        message: '',
        type: 'bug',
      })
    }
  }

   const handleChange =  (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

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
             <PostList posts={filteredPosts} searchTerm={searchTerm} />
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
            <div className="card">
              <h2 className="card-title">
                Share Your Feedback
              </h2>
              <p>
                Found a bug? Have a suggestion? Want to collab? Fill out the form, and I'll take a look.
              </p>
              <form name="contact" method="post" onSubmit={handleSubmit}>
                 <div className="d-flex flex-column mb-10 mt-20">
                  <label>What type of feedback are you submitting?</label>
                </div>
                <Radio name="type" value="bug" handleChange={handleChange} checked={values.type === 'bug'} label="Bug" />
                <Radio name="type" value="suggestion" handleChange={handleChange} checked={values.type === 'suggestion'} label="Suggestion" />
                <Radio name="type" value="collab" handleChange={handleChange} checked={values.type === 'collab'} label="Collab" />
                <Radio name="type" value="other" handleChange={handleChange} checked={values.type === 'other'} label="Other" />
                <div className="input-group d-flex flex-column mt-20">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Name" name="name" value={values.name} onChange={handleChange} />
                </div>
                <div className="input-group d-flex flex-column mt-20">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" name="email" value={values.email} onChange={handleChange}  />
                </div>
                <div className="input-group d-flex flex-column mt-20">
                  <label>Details</label>
                  <textarea className="form-control" placeholder="Write here" name="message" value={values.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn mt-10">Send</button>
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