import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there, {user.name.split(" ")[0]}</b> 
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span >InteresTwin</span> app 👏
              </p>
            </h4>
            <div className="dashboard_btn_wrapper">
            <Link to="/join">
              <button
                style={{
                  width: "200px",
                  borderRadius: "10px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable grey darken-3"
              >
                Join Chatroom
            </button>
            </Link>
            <button
              style={{
                width: "200px",
                borderRadius: "10px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable grey darken-3"
            >
              Logout
            </button>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);