import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <AppContainer>
          <div class="ui vertical footer segment">
            <div class="ui center aligned container">
              <div class="ui stackable divided grid">
                
                  {/* <Image  width="60px" /> */}
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "200",
                      color: "white"
                    }}
                  >
                    {" "}
                    All rights reserved.
                    <br /> ©2019 ZKASA
                  </p>
                
                <ColumnStyle1
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header" style={{ fontFamily: `'Exo 2', sans-serif`}}> Contact </HeadStyle>
                  <div class="ui link list">
                  
                    {/* <Link to='./FullTimeUtah' style={{ color: "white" }} class="item">
                      {" "}
                      Full Time Utah
                    </Link>
                    <Link to='./PartTimeUtah' style={{ color: "white" }} class="item">
                      {" "}
                      Part Time Utah
                    </Link>
                    <Link to='./PartTimeLV' style={{ color: "white" }} class="item">
                      {" "}
                      Part Time Las Vegas
                    </Link> */}
                  
                  </div>
                </ColumnStyle1>
                <ColumnStyle2
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header" style={{ fontFamily: `'Exo 2', sans-serif`}}> About Us </HeadStyle>
        
                </ColumnStyle2>
                <ColumnStyle3
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle class="ui header" style={{ fontFamily: `'Exo 2', sans-serif`}}> Our Work </HeadStyle>
            
                </ColumnStyle3>
                {/* <ColumnStyle4
                  class="three wide column"
                  style={{ textAlign: "center" }}
                >
                  <HeadStyle style={{ color: "white" }} class="ui header">
                    {" "}
                    {" "}
                  </HeadStyle>
                  
                </ColumnStyle4> */}
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
  darkPurp: `#2d4d7f`,
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
  ${colors.darkPurp}!important;
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