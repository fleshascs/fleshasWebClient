import React from "react";
import ContentLoader from "react-content-loader";

const PlaceHolder = () => (
  <ContentLoader
    height={140}
    speed={1}
    primaryColor={"#fff"}
    secondaryColor={"#efefef"}
  >
    {/* Pure SVG */}
    <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
    <rect x="0" y="120" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="140" rx="3" ry="3" width="380" height="6.4" />
  </ContentLoader>
);

const ShoutsPlaceHolder = () => (
  <div>
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
    <PlaceHolder />
  </div>
);

export default ShoutsPlaceHolder;
