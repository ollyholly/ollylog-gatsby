import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo'

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout >
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />;

