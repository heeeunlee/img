import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";
class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default {
  path: "/",
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: HomePage
    },

    {
      path: "/about",
      name: "/about",
      component: AboutPage
    },
    {
      path: "/resume",
      name: "/resume",
      component: ResumePage
    }
  ]
};
