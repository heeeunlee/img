/**
 *
 * HomePage
 *
 */
import React, { Component } from "react";
import { Row, Column } from "modules/Layout";
class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="relative" style={{ height: "100px" }}>
          <Row>
            <Column col="6">
              <div>
                <a href="/home">
                  <img className="logo" src="./styles/img/water.jpg" />
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
        <Row>
          <Column
            className="relative here"
            col="12"
            style={{ height: "200px" }}
          >
            <div className="text-center">
              <h1>
                <span className="first-text">text</span>
              </h1>
              <span className="second-text">text</span>
            </div>
          </Column>
        </Row>
      </div>
    ); // eslint-disable-line
  }
}
export default HomePage;
