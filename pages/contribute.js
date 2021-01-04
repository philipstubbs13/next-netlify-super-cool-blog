/* eslint-disable prettier/prettier */
// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@components/layout/Layout';

const Contribute = ({ title, description }) => {
    return (
        <Layout pageTitle={`${title} | Contribute`} description={description}>
            <div className="container-md">
                <div className="row">
                    <div className="col-12">
                        <h1 className="title">Contribute</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            Do you have an idea for a post and want to contribute as a guest writer?
                            That&apos;s awesome! Thanks for your contribution. The process for
                            contributing is still being worked out. In the future, I hope to have
                            the contribution process much easier and more straightforward. So, thank
                            you for bearing with me at the moment.
                        </p>
                        <p>
                            For now, here is some helpful information on how you can begin
                            contributing quickly. If you have any questions, are confused, or are
                            having trouble with getting started, don&apos;t be afraid to reach out,
                            and I will do my best to help or clarify. Thanks again!
                        </p>

                        <section className="border-top">
                            <h3>Download the source code for this website.</h3>
                            <p>
                                The source code and posts for this website are open source. You can
                                find the repository on{' '}
                                <a
                                    href="https://github.com/philipstubbs13/next-netlify-blog"
                                    target="_blank"
                                    rel="noreferrer">
                                    GitHub
                                </a>
                                .
                            </p>
                            <p>
                                To download the code to a local directory on your computer, perform
                                the following steps:
                            </p>
                            <ol>
                                <li>
                                    If you do not already have GIT installed on your machine,
                                    download and install GIT from{' '}
                                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                                        here
                                    </a>
                                    .
                                </li>
                                <li>
                                    Clone the source code for this website to a local directory on
                                    your computer by running the following command in a terminal.
                                    <pre>
                                        git clone
                                        https://github.com/philipstubbs13/next-netlify-blog.git
                                    </pre>
                                    Running this will create a directory called{' '}
                                    <code className="code">next-netlify-blog</code> within the
                                    directory you ran this command.
                                </li>
                            </ol>
                        </section>

                        <section className="border-top">
                            <h3>Creating a post</h3>
                            <p>Perform the following steps to create a post.</p>
                            <ol>
                                <li>
                                    Navigate to the{' '}
                                    <code className="code">next-netlify-blog/posts</code> directory
                                    and create a <code className="code">.md</code> file within the{' '}
                                    <code className="code">posts</code> directory.
                                    <p>
                                        The name of the file should be similar to the title of your
                                        blog post where each word is hyphenated with one another.
                                    </p>
                                    <p>
                                        There should be no spaces in the filename and should be all
                                        lowercase. For example, if the title of your blog post is{' '}
                                        <b>My Awesome Post</b>, then a good filename for the post
                                        would be{' '}
                                        <code className="code">my-awesome-blog-post.md</code>.
                                    </p>
                                </li>
                                <li>
                                    Inside the newly created <code className="code">.md</code> file
                                    you created, copy and paste the starter code from{' '}
                                    <code className="code">
                                        next-netlify-blog/posts/example-post.md
                                    </code>{' '}
                                    into your new file.
                                    <p>
                                        This is the template for writing a blog post for this site.
                                        If you follow this template, you should have no problem
                                        contributing.
                                    </p>
                                    <p>
                                        Note that posts for this site are written in Markdown
                                        syntax. If you are unfamiliar with Markdown, it is pretty
                                        straightforward to get up to speed with. For additional
                                        help, refer to this{' '}
                                        <a
                                            href="https://guides.github.com/features/mastering-markdown/"
                                            target="_blank"
                                            rel="noreferrer">
                                            Markdown guide
                                        </a>
                                        .
                                    </p>
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contribute;

export async function getStaticProps() {
    const configData = await import(`../siteconfig.json`);

    return {
        props: {
            title: configData.default.title,
            description: configData.default.description
        }
    };
}

Contribute.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
