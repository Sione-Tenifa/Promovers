import React from "react";
import { Image, Divider } from "semantic-ui-react";
import styled from "styled-components";
// import { Link } from 'react-router-dom'
import Logo from '../Images/blackpro.jpeg'


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <AppContainer>
          <div class="ui vertical footer segment">
            <div class="ui center aligned container">
              <div class="ui stackable divided grid">
                
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "200",
                      color: "white"
                    }}
                  >
                    {/* {" "} */}
                    All rights reserved.
                    <br /> ©2019 Pro Movers
                  </p>
                
                <ColumnStyle1
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  {/* <Link to='/contact'> */}
                  <HeadStyle class="ui header" style={{ fontFamily: `'Exo 2', sans-serif`}}> Contact </HeadStyle>
                  {/* </Link> */}
                  <div class="ui link list">
                  
                  </div>
                </ColumnStyle1>
                <ColumnStyle2
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  {/* <Link to='/aboutus'> */}
                  <HeadStyle class="ui header" style={{ fontFamily: `'Exo 2', sans-serif`}}> About Us </HeadStyle>
                  {/* </Link> */}
        
                </ColumnStyle2>
                <ColumnStyle3
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  {/* <Link to='/ourwork'> */}
                  <HeadStyle class="ui header" style={{ fontFamily: `'Exo 2', sans-serif`}}> Our Work </HeadStyle>
                  {/* </Link> */}
                  
            
                </ColumnStyle3>
                <ColumnStyle4>
                  <div class='footerlogo'>
                    <Image src={Logo}/>
                  </div>
                </ColumnStyle4>
              </div>
            </div>
          </div>
        </AppContainer>
      </footer>
    );
  }
}

const colors = {
  black: `#141414`,
  darkGrey: `#2d2d2d`,
  grey: `#757575`,
  darkBlue: `#2d4d7f`,
  purp: `#6E54A3`,
  white: `#FFFFFF`,
  lightPurp: "#e4dced"
};

const HeadStyle = styled.h4`
  color: white
  font-size: 12pt
`;

const LogoCon = styled.div`
  padding-top: 70px;
  
    margin-top: 30px
    margin-left: 50px
    margin-bottom: 30px
  
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center
  align-items: center
  width: 100%;
  background-color: 
  black !important;
`;

const ColumnStyle1 = styled.div`
  margin-left: 3em;
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
 

`;
const ColumnStyle2 = styled.div`
  margin-left: 1em;
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
  
`;

const ColumnStyle3 = styled.div`
  margin-left:
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 6em;

  `;

const ColumnStyle4 = styled.div`
  margin-left: 5em;
  margin-top: 5em;
  margin-bottom: 6em;
`;

export default Footer;