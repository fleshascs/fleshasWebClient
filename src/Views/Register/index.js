import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import { Spinner } from "../../components";
import { Redirect } from "react-router";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

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

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn, loggingInFailed, loggedIn } = this.props;
    const { username, password, submitted } = this.state;

    if (loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container mt-5" style={{ width: "500px" }}>
        <form className="" onSubmit={this.handleSubmit}>
          <div>
            <fieldset>
              <div className="input">
                <input
                  type="text"
                  placeholder="El. paštas"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <span className="icon">
                  <i className="material-icons">mail_outline</i>
                </span>
              </div>
              {submitted &&
                !username && (
                  <div className="help-block">Username is required</div>
                )}

              <div className="input">
                <input
                  type="text"
                  placeholder="Naudotojo vardas"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <span className="icon">
                  <i className="material-icons">mail_outline</i>
                </span>
              </div>
              {submitted &&
                !username && (
                  <div className="help-block">Username is required</div>
                )}

              <div className="input">
                <input
                  type="password"
                  placeholder="Jūsų slaptažodis"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <span className="icon">
                  <i className="material-icons">&#xE899;</i>
                </span>
              </div>
              {submitted &&
                !password && (
                  <div className="help-block">Password is required</div>
                )}

              <div className="input">
                <input
                  type="password"
                  placeholder="Pakartoti slaptažodį"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <span className="icon">
                  <i className="material-icons">&#xE899;</i>
                </span>
              </div>
              {submitted &&
                !password && (
                  <div className="help-block">Password is required</div>
                )}
              <div className="input">
                <button type="submit" className="btn btn-success w-100">
                  Registruotis
                </button>
              </div>
            </fieldset>
          </div>

          {loggingIn && <Spinner />}
          {loggingInFailed && (
            <div>Neteisingas el. pastas arba slaptažodis</div>
          )}

          {loggedIn && <div>prisijungta</div>}

          <div className="feedback">
            login successful <br />
            redirecting...
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, loggedIn, loggingInFailed } = state.authentication;
  return {
    loggingIn,
    loggingInFailed,
    loggedIn
  };
}

export default connect(mapStateToProps)(Register);
