import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components";

import Home from "./Views/Home";
import UserProfile from "./Views/UserProfile";
import NotFound from "./Views/NotFound";
import Thread from "./Views/Thread";
import Forum from "./Views/Forum";
import ForumThreads from "./Views/ForumThreads";
import Login from "./Views/Login";

const theme = {
  PRIMARY_COLOR: "#da4848",
  AVATAR_HOWER_SHADOW_COLOR: "#da4848",
  CHAT_HEADER_COLOR: "#da4848",
  FORUMS_CATEGORY_HEADER_TEXT_COLOR: "#da4848"
};

/* const theme = {
  PRIMARY_COLOR: "#663399",
  AVATAR_HOWER_SHADOW_COLOR: "rgba(102, 51, 153, 0.62)",
  CHAT_HEADER_COLOR: "#647b94",
  FORUMS_CATEGORY_HEADER_TEXT_COLOR: "#9278de"
}; */

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/thread" component={Thread} />
            <Route exact path="/forum" component={Forum} />
            <Route path="/forum/:number" component={ForumThreads} />
            <Route path="/login" component={Login} />
            {/* <Route component={NotFound} /> */}
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
