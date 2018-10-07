import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 94px;
  height: 100vh;
  background: #fff; //#1d1f2c;
`;

const Pattern = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  min-width: 1440px;
`;

const BackgroundImg = styled.img`
  width: 100%;
  min-width: 1440px;
  opacity: 0.2;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #fff, rgba(29, 31, 44, 0));
  }
`;

const Backround = () => (
  <Container>
    <Wrapper>
      <BackgroundImg src="https://dhfp6cbxih843.cloudfront.net/public/assets/v4/PUBG/pubg.jpg" />
      <Pattern src="https://dhfp6cbxih843.cloudfront.net/public/assets/v4/PUBG/boom-pattern.png" />
    </Wrapper>
  </Container>
);

export default Backround;
