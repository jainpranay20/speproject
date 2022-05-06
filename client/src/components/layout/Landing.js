import React, { Component } from "react";
import { Link } from "react-router-dom";
import chatIcon from "./chat.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align image_container">
            <div className="chat_icon_image_wrapper">
            <img src={chatIcon} alt="chat" />
            </div>
            <p className="flow-text grey-text text-darken-1">
              InteresTwin is a webapp our objective is to help students to connect with other students who explore and share
the same interests as them. </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable grey darken-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable grey darken-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;