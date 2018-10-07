import React, { Component } from "react";
import MobileLayout from "./Mobile";
import DesktopLayout from "./Desktop";

class Layout extends Component {
  render() {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
      return <MobileLayout>{this.props.children}</MobileLayout>;
    }

    return <DesktopLayout>{this.props.children}</DesktopLayout>;
  }
}

export default Layout;
