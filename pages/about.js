// @ts-nocheck
import Layout from '../components/layout/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
      <div className="container-md">
        <div className="row">
          <div className="col-12">
            <h1 className="title">About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint, minus libero eaque amet aliquam? Non laborum quaerat, corrupti nulla facere, doloribus accusamus voluptatem omnis quae voluptatum atque! Impedit quaerat sequi a accusamus minus ducimus adipisci fugit alias, minima dicta voluptatibus non explicabo natus dolore officia qui, facere at, quam mollitia. Magni eos accusantium distinctio asperiores fuga cumque repudiandae exercitationem.
            </p>
          </div>
          <div className="col-4">
            <img src="/profile.jpg" alt="profile" className="img-fluid rounded" width={200} />
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}