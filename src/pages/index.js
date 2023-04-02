import React from 'react';
import { Link, graphql } from 'gatsby';

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
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
  <div>
    <h1>Blog Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h3>
        <p>{node.frontmatter.date}</p>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </div>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
