import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components";

import Home from "./Views/Home";
import UserProfile from "./Views/UserProfile";
import NotFound from "./Views/NotFound";

const theme = {
  PRIMARY_COLOR: "#663399"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={UserProfile} />
            {/* <Route component={NotFound} /> */}
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
