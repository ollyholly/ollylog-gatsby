import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

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
      <StaticImage
        alt="hellocat"
        src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
      />

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

export const Head = () => <Seo title="Home Page" />