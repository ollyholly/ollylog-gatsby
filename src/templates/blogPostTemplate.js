import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import Layout from '../components/layout'
import Seo from '../components/seo'

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const BlogPostTemplate = ({ data, children}) => {
  const post = data.mdx;

  return (
    <Layout >
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

