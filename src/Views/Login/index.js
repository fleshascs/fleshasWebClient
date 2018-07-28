import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    return (
      <div className="login-container">
        <form className="login">
          <legend className="legend">Prisijungti</legend>
          <div className="row">
            <div className="col">
              <fieldset>
                <div className="input">
                  <input type="text" placeholder="Vardas" required />
                  <span>
                    <i className="fa fa-envelope-o" />
                  </span>
                </div>

                <div className="input">
                  <input type="password" placeholder="Slaptažodis" required />
                  <span>
                    <i className="fa fa-lock" />
                  </span>
                </div>

                <button type="submit" className="submit">
                  <i className="material-icons login-button-icon">
                    keyboard_arrow_right
                  </i>
                </button>
              </fieldset>
            </div>
            <div className="col">
              <div className="connect">Connect with</div>
            </div>
          </div>

          <div className="feedback">
            login successful <br />
            redirecting...
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
