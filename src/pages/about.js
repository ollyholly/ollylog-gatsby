import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Olly" >
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
  )
}

export default AboutPage

export const Head = () => 
<>
<title>About Olly</title>
<meta name="description" content="This is a page about Olly." />
</>