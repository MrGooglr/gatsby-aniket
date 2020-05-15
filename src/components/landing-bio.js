import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 70vh;
`

const Description = styled.p`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  background-color:#ffd662;
  color:#00539c;
`

const NameHeader = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1.0rem;
  color: rgba(0,0,0,0.8);
`
const NameHeaderGreet = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.0rem;
  color: rgba(0,0,0,0.8);
  font-weight:lighter;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeaderGreet>Hello, I'm</NameHeaderGreet>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>and I'm a {data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
