// @ts-nocheck
import { useState } from 'react';
import matter from 'gray-matter'
import Layout from '@components/layout/Layout'
import PostList from '@components/post-list/PostList';
import SearchFilter from '@components/search-filter/SearchFilter';

const Index = ({ posts, title, description }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
   const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  console.log(values)

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

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        alert("Success!")
        setValues({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

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
                Feedback
              </h2>
              <form name="contact" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="input-group d-flex flex-column mt-10">
                  <label>Name</label>
                  <input type="text" class="form-control" placeholder="Name" name="name" value={values.name} onChange={handleChange} />
                </div>
                <div className="input-group d-flex flex-column mt-10">
                  <label>Email</label>
                  <input type="email" class="form-control" placeholder="Email" name="email" value={values.email} onChange={handleChange}  />
                </div>
                <div className="input-group d-flex flex-column mt-10">
                  <label>Message</label>
                  <textarea class="form-control" placeholder="Message" name="message" value={values.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn mt-10">Send Feedback</button>
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