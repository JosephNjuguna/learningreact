import React, { Component } from 'react';
import {Navigation,Footer} from './';

class Signup extends Component{
  render(){
    return(
      <body>
        <Navigation/>

        <div className="signupForm">

          <div className="Authform">
            <input className="inputName" placeholder= "enter your username"></input>
            <input placeholder="enter your email"></input>
            <input placeholder="enter your password"></input>
            <button className="authButton" type="submit"> <b>SIGN UP</b> </button>
            <p>Already have an account? <a href="/signin">Sign in</a></p>

          </div>

        </div>

        <Footer/>
      </body>
    );
  }
}

export default Signup;
