import React from 'react';
import { Grid, Container, Button, Image, Segment, Header } from 'semantic-ui-react';
import {Link,} from 'react-router-dom'
import styled from 'styled-components'
import Stairs from '../Images/stairs.jpeg'
import Footer from './Footer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Logo from '../Images/whitepro.jpeg'





const Home = () => (
  <>
      <Segment as={Transparent}>
        {/* <Header as="h2" textAlign="center">My Projects</Header> */}
      </Segment>
      <Segment color='blue' style={{color: '#2d4d7f'}}>
        <Header as="h2" textAlign="center">ZKASA Concrete</Header>
        <Jumbotron>
          <h1>Concrete is what we do!</h1>
          <ul>
          <p>
          Building it better in concrete.
          </p>
         

          </ul>
        </Jumbotron>
      </Segment>
      <div>

      <Segment>
        <Header as="h2" textAlign="center">Contact</Header>
        <Image  centered src={Stairs}/>
        <Image  centered src={Logo}/>

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
