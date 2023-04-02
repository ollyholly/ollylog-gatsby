import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
     <Layout pageTitle="Home Page">
    <h2>Blog Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h3>
        <p>{node.frontmatter.date}</p>
        <p>{node.excerpt}</p>
      </div>
    ))}
    </Layout>
);

export default IndexPage;

export const Head = () => <title>Olly Home Page</title>;
