import React, { Component } from "react";
import styled from "styled-components";
import { NavBar } from "../components";

const Container = styled.header`
  color: #fff;
  background: ${props => props.theme.PRIMARY_COLOR};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
  z-index: 1;
  left: -3px;
  right: -3px;
  top: 0;
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #efefef;
  transition: all 0.3s ease, top 0.2s ease-in-out;
  // min-height: 112px;
`;

const Logo = styled.div`
  font-family: bauerg;
  font-size: 2em;
`;

const Top = styled.div`
  background: ${props => props.theme.HEADER_TOP_COLOR};
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <Top>
          <div className="container d-flex ">
            {/* <div className="position-relative" style={{ marginRight: "100px" }}>
              <img
                style={{ width: "100px", height: "100px" }}
                className="position-absolute"
                src="https://192638-571855-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/08/viper-audio-production-flashbangstudio.png"
              />
            </div> */}
            <Logo>fleshas.lt</Logo>
          </div>
        </Top>
        <NavBar />
      </Container>
    );
  }
}

export default Header;
