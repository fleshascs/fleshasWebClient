// firebase login --interactive
//https://www.npmjs.com/package/firebase
import React, { Component } from "react";
import firebase from "firebase/app";

import "./index.css";
//import "bootstrap-without-jquery";

// Add additional services you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/messaging";
//import "firebase/functions";

const firebaseCfg = {
  apiKey: "AIzaSyA4FIkVnCUJGK6cT2Om7yyQCI0NDJYFSTI",
  authDomain: "fir-test-4e308.firebaseapp.com",
  databaseURL: "https://fir-test-4e308.firebaseio.com",
  projectId: "fir-test-4e308",
  storageBucket: "fir-test-4e308.appspot.com",
  messagingSenderId: "208727245292"
};

firebase.initializeApp(firebaseCfg);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
firebase.auth().useDeviceLanguage();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
      userProfile: null
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    // Updating the `isSignedIn` and `userProfile` local state attributes when the Firebase Auth
    // state changes.
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user, userProfile: user });
    });
  }

  /*   login(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  } */
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          // Sign-out successful.
        },
        function(error) {
          // An error happened.
        }
      );
  }

  handleLogin(e) {
    e.preventDefault();

    /* this.login(e.currentTarget.email, e.currentTarget.password); */

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        this.setState({ user: result.user });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  componentWillUnmount() {
    // Un-registers the auth state observer.
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div id="app">
        <header id="header" className="header">
          {this.state.userProfile ? (
            <div className="userBlock">
              <img src={this.state.userProfile.photoURL} className="avatar" />
              <div className="details">
                <span>{this.state.userProfile.displayName}</span>
                <span className="email">
                  {this.state.userProfile.email}{" "}
                  <a href="javascript:;" onClick={this.signOut}>
                    Atsijungti
                  </a>
                </span>
              </div>
            </div>
          ) : null}

          {!this.state.userProfile ? (
            <button
              type="button"
              onClick={this.handleLogin}
              class="button btn-google"
            >
              Prisijungti su Google
            </button>
          ) : null}
        </header>

        <main id="main" className="main p-0 mx-0">
          <div class="box">
            {!this.state.userProfile ? (
              <div>Norėdami naudotis sistema privalote prisijungiti!</div>
            ) : (
              ""
            )}
            {this.state.userProfile
              ? JSON.stringify(this.state.userProfile)
              : ""}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
