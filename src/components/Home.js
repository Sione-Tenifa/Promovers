import React from 'react';
import { Grid, Container, Image, Segment, Header } from 'semantic-ui-react';
import {Link,} from 'react-router-dom'
import styled from 'styled-components'
import Stairs from './stairs.jpeg'
import Footer from './Footer'



const Home = () => (
  <>
      <Segment as={Transparent}>
        {/* <Header as="h2" textAlign="center">My Projects</Header> */}
      </Segment>
      <Segment color='blue' style={{color: '#2d4d7f'}}>
        <Header as="h2" textAlign="center">ZKASA Concrete</Header>
      </Segment>
      <div>

      <Segment>
        <Header as="h2" textAlign="center">Contact</Header>
        <Image  centered src={Stairs}/>
      </Segment>
      <Footer />
      </div>
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

const Transparent = styled.div`
  background: transparent !important;
`;


export default Home;
