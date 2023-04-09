import React from 'react'
import Page from '../Page/Page'
import styled from 'styled-components'

function Home() {
  return (
    <div>
        <Page>
          <Container>

          </Container>
        </Page>
    </div>
  )
}

export default Home

 
export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;   
`