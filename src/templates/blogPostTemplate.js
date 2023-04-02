import React from 'react';
import { graphql } from 'gatsby';

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
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default BlogPostTemplate;
