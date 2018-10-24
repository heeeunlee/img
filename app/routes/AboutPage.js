/**
 *
 * AboutPage
 *
 */

import React, { Component } from "react";
import { Row, Column } from "modules/Layout";

class AboutPage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div className="relative" style={{ height: "100px" }}>
          <Row>
            <Column col="6">
              <div className="logo">
                <a href="/home">
                  <span>logo</span>
                </a>
              </div>
            </Column>
            <Column style={{ height: "100px" }} col="6">
              <div className="main-contents">
                <div className="in-b">
                  <a href="/home">
                    <span>work</span>
                  </a>
                </div>
                <div className="in-b">
                  <a href="/about">
                    <span>about</span>
                  </a>
                </div>
                <div className="in-b">
                  <a href="/resume">
                    <span>resume</span>
                  </a>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    ); // eslint-disable-line
  }
}
export default AboutPage;
