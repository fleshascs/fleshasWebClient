import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ececec;
`;

const PlaceHolder = () => (
  <Container>
    <ContentLoader
      height={60}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="53" y="3.58" rx="4" ry="4" width="277.5" height="16.25" />
      <rect
        x="55"
        y="22"
        rx="4"
        ry="4"
        width="114"
        height="8.649600000000001"
      />
      <rect x="68.5" y="57.27" rx="0" ry="0" width="0" height="1" />
      <rect x="92.5" y="57.27" rx="0" ry="0" width="0" height="0" />
      <rect x="97.5" y="53.27" rx="0" ry="0" width="0" height="0" />
      <rect x="38.5" y="51.27" rx="0" ry="0" width="0" height="0" />
      <rect x="364.4" y="3.27" rx="0" ry="0" width="27.2484" height="26.1696" />
      <rect x="127.5" y="164.27" rx="0" ry="0" width="0" height="0" />
      <rect x="125.5" y="136.27" rx="0" ry="0" width="0" height="0" />
      <rect x="125.5" y="169.27" rx="0" ry="0" width="0" height="0" />
      <rect x="126.5" y="169.27" rx="0" ry="0" width="0" height="0" />
      <rect x="10.5" y="4.27" rx="0" ry="0" width="26.79" height="28.2" />
      <rect x="39.5" y="82.27" rx="0" ry="0" width="0" height="0" />
    </ContentLoader>
  </Container>
);

function createPlaceHolder(shoutsNum = 1) {
  let placeHolders = [];
  for (let j = 0; j < shoutsNum; j++) {
    placeHolders.push(<PlaceHolder key={j} />);
  }
  return placeHolders;
}

const ShoutsPlaceHolder = () => <div>{createPlaceHolder(11)}</div>;
export default ShoutsPlaceHolder;
