import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterBlock = styled.footer`
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
`

const Footer: React.SFC<{}> = () => (
  <FooterBlock>
    <strong>© 2019 mkrup.</strong> Made with love by Mykolas Krupauskas.
  </FooterBlock>
)

export default Footer
