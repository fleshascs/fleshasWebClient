import React from "react";
import ContentLoader from "react-content-loader";

const PlaceHolder = () => (
  <ContentLoader
    height={40}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="61" y="5" rx="4" ry="4" width="222.00000000000003" height="13" />
    <rect
      x="64"
      y="20"
      rx="4"
      ry="4"
      width="113.99999999999999"
      height="12.72"
    />
    <rect x="68.5" y="57.27" rx="0" ry="0" width="0" height="1" />
    <rect x="92.5" y="57.27" rx="0" ry="0" width="0" height="0" />
    <rect x="97.5" y="53.27" rx="0" ry="0" width="0" height="0" />
    <rect x="38.5" y="51.27" rx="0" ry="0" width="0" height="0" />
    <rect
      x="13.5"
      y="5.27"
      rx="0"
      ry="0"
      width="31.319999999999997"
      height="30.08"
    />
    <rect x="127.5" y="164.27" rx="0" ry="0" width="0" height="0" />
    <rect x="125.5" y="136.27" rx="0" ry="0" width="0" height="0" />
    <rect x="125.5" y="169.27" rx="0" ry="0" width="0" height="0" />
    <rect x="126.5" y="169.27" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
);

function createPlaceHolder(shoutsNum = 1) {
  let placeHolders = [];
  for (let j = 0; j < shoutsNum; j++) {
    placeHolders.push(<PlaceHolder key={j} />);
  }
  return placeHolders;
}

const ShoutsPlaceHolder = () => <div>{createPlaceHolder(20)}</div>;
export default ShoutsPlaceHolder;
