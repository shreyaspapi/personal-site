import React from 'react'
import styled from 'styled-components'
import groq from 'groq'
import Page from '../components/page'
import { Stack, Columns, below } from '../components/layout'
import PurpleImage from '../components/image'
import SEO from '../components/seo'
import { Title, MassiveHeading } from '../components/text'
import { JobList } from '../components/jobList'
import client from '../client'

const ProfileImage = styled(PurpleImage)`
  ${below.med`
    grid-row: 1;
    margin-top: 40px;
  `}
`

const IndexPage = ({ jobs }) => (
  <Page>
    <SEO title="home" description="Developer + Entrepreneur" />
    <Columns smallCount={1} smallSpacing={10} className="AlignCenter">
      <Stack smallSpacing={10}>
        <Stack className="AlignStart fadeInUpSlight" spacing={1}>
          <MassiveHeading>Shreyas Papinwar</MassiveHeading>
          <Title>Developer + Entrepreneur</Title>
        </Stack>
        {jobs && <JobList className="AlignEnd" jobs={jobs} />}
      </Stack>
      <ProfileImage
        className="JustifyEnd"
        width={400}
        height={400}
        src="https://raw.githubusercontent.com/shreyaspapi/personal-site/master/web/profile.png"
      />
    </Columns>
  </Page>
)

const getAllJobs = groq`*[_type == "job" ] | order(startDate desc) {title, endDate, startDate, place, url }[0...4]`

export async function getStaticProps() {
  const jobs = await client.fetch(getAllJobs)
  console.log(jobs)
  return {
    props: { jobs: jobs || null }, // will be passed to the page component as props
  }
}
export default IndexPage
