import React from 'react';
import { Grid, Container, Button, Image, Segment, Header } from 'semantic-ui-react';
import {Link,} from 'react-router-dom'
import styled from 'styled-components'
import Trailer from '../Images/trailer.jpeg'
import Footer from './Footer'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Logo from '../Images/Proheader.jpeg'
import './navbar.css'






const Home = () => (
  <>
      <Segment as={Transparent}>
        
      </Segment>
      <Segment color='blue' style={{color: '#2d4d7f'}}>
        <div class='logo' textAlign='center'>
          <Image  centered src={Logo}/> 
          <Header> Reliable, Fair, Equality</Header>
        </div>
        <Jumbotron>
          <h1>Moving is what we do!</h1>
          <ul>
          <p>
          Reliable
          </p>
         

          </ul>
        </Jumbotron>
      </Segment>
      <div>

      <Segment>
        <Header as="h2" textAlign="center">Contact</Header>
        <Image  centered src={Trailer}/>
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
