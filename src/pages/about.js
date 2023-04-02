import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Olly" >
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="sausage dog"
        src="https://www.thesprucepets.com/thmb/8UgAnzf_7o7i7qPPr528XtM0IW8=/2121x0/filters:no_upscale():strip_icc()/GettyImages-839279536-313d30c290584bc0a207bc6243263bd4.jpg"
      />
      <StaticImage
        alt="random cat"
        src="../images/cat.jpeg"
      />
      </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="About" />
