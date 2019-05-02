import React  from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import OurWork from './components/OurWork'
import { Switch, Route, } from 'react-router-dom';
import styled from 'styled-components'
import {Container} from 'semantic-ui-react'






const App = () => (
  
  <div > 
    <NavBar/>
    <AppContainer>
    <Container>
      <Navbottom>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/navbar" component={NavBar} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/ourwork" component={OurWork} />

        <Route component={NoMatch} />
      </Switch>
      </Navbottom>
    </Container>
        
    </AppContainer>
  </div>
)
const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
  height: 100%;
  width: 100%;
`;
const Navbottom = styled.div`
  background: #2d4d7f;
  height: 100% ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover
`;

export default App;
    

    
  
  
