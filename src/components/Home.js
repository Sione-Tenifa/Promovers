import React from 'react';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';
import {Link,} from 'react-router-dom'
import styled from 'styled-components'


const Home = () => (
  <>
      <Segment>
        <Header as="h2" textAlign="center">My Projects</Header>
      </Segment>
      <Segment>
        <Header as="h2" textAlign="center">Contact</Header>
    </Segment>
  </>

 
)

const GridStyle = {
  overflow: `visible`,
  whiteSpace: `nowrap`,
  height: `100vh`,
  width: `100%`,
  margin: `0`,
  backgroundColor: `#eee`,
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;

export default Home;
