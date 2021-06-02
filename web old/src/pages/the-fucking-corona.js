import React from 'react'
import { TFWPage } from '../components/page'
import SEO from '../components/seo'
import { Hero } from '../components/tfc/hero'
import { Section1 } from '../components/tfc/Section1'
import { Section2 } from '../components/tfc/Section2'
import { Testimonials } from '../components/tfc/Testimonials'
import { Downloads } from '../components/tfc/Downloads'
import { Contact } from '../components/tfc/Contact'

const IndexPage = () => (
  <TFWPage>
    <SEO
      title="The F*cking Corona"
      description="A corona app for people who hate corona stats."
    />
    <Hero />
    <Section1 />
    <Section2 />
    <Testimonials />
    <Downloads />
    <Contact />
  </TFWPage>
)

export default IndexPage
