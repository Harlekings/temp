import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

import Logo from '../images/logo-big.png';
import { create } from 'domain';

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}

h1 {
  margin-top: 20px;
  font-weight: 300;
}
`

const Layout = styled.div`
  font-family: "Exo 2", Sans-Serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background-color: #000000;
  color: #ffffff;
`

const Img = styled.img`
  min-width: 256px;
  width: 25vw;
`

const IndexPage = () => (
  <Layout>
    <Img style={{maxWidth: "50vw"}} src={Logo} alt="HarleKings" />
    <h1>Bald wieder für euch da!</h1>
    <p>info@harlekings.gg</p>
    <Global />
  </Layout>
)

export default IndexPage
