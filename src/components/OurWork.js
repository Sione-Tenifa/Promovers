import React from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import Carousel from 'react-bootstrap/Carousel'
import Stairs from '../Images/stairs.jpeg'
import Porch from '../Images/porch.jpeg'
import Stamped from '../Images/stamped.jpeg'



const Home = () => (
  <>
    <Container>
      
      <Segment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Stairs}
              alt="First slide"
              />
            <Carousel.Caption>
              <h3>Stairs</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Stamped}
              alt="Third slide"
              />

            <Carousel.Caption>
              <h3>Stamped Patio</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Porch}
              alt="Third slide"
              />

            <Carousel.Caption>
              <h3>Porch</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Segment>
    </Container>
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

export default Home;
