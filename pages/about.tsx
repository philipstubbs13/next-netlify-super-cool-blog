import PropTypes from 'prop-types';
import { Layout } from '../components/layout/Layout';

export interface IProps {
  description: String;
  title: String;
}

const About = (props: IProps) => {
  return (
    <>
      <Layout pageTitle={`${props.title} | About`} description={props.description}>
        <div className="container-md">
          <div className="row">
            <div className="col-12">
              <h1 className="title">About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-8 pr-10">
              <p>
                Well hello there! Welcome to my blog. My name is Phil Stubbs, and I am happy you
                stopped by to check out what I have been up to. I created this blog to share and
                document my life with you all. As to what this blog is about... it is and will be
                about pretty much anything I find interesting, learn, or am just curious about in my
                day-to-day life. I do not really have a focus area or agenda for what I plan to
                write and upload on this site. Whatever comes to my mind in the moment and that I
                want to share with random strangers on the Internet is what I plan to post. But, of
                course, if you have any ideas, suggestions, topics, or questions that you would like
                me to cover in a future article, simply{' '}
                <a href="mailto:philipstubbs13@gmail.com" target="_blank" rel="noreferrer">
                  email me
                </a>{' '}
                for now, and I will take your suggestion into consideration next time I sit down to
                write.
              </p>
              <p>
                You might be asking, &quot;who am I?&quot;. And, that is a great question. I am a
                full stack software engineer. Specifically, I tend to focus on front end web
                development but also enjoy digging deep into the backend when needed. I love
                building websites and deploying what I make to the Interent so that it is available
                for others to see, use, and interact with. If you would like to know more about my
                developer journey and more details on how I got into coding specifically, I make
                developer and coding-oriented content on TikTok. Check me out at{' '}
                <a
                  href="https://github.com/devsontiktok/awesome-devs-on-tiktok"
                  target="_blank"
                  rel="noopener noreferrer">
                  Awesome Developers On TikTok
                </a>
                .
              </p>
              <p>
                In my free time, I enjoy making, editing, and uploading videos for TikTok. For those
                who are not familiar with TikTok, it is a social media platform for sharing and
                consuming short (15 second) videos with others on the Internet. I first started
                posting on TikTok in November 2019, and you can find me by the username{' '}
                <a
                  href="https://tiktok.com/@thephilstubbs"
                  target="_blank"
                  rel="noopener noreferrer">
                  @thephilstubbs
                </a>
                . Besides making videos, I also enjoy running, hiking, watching sports (mainly
                football and basketball), tweeting commentary about sports games I watch, and
                playing video games (mainly NBA2K and Madden).
              </p>
            </div>
            <div className="col-4">
              <img src="/profile.jpg" alt="profile" className="img-fluid rounded" width={200} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
