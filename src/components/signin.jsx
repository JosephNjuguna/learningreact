import React, { Component } from 'react';
import {Navigation,Footer} from './';

class Signin extends Component{
  render(){
    return(
      <body>
        <Navigation/>
          <div className="signupForm">
            <div className="Authform">
              <input placeholder="enter your email"></input>
              <input placeholder="enter your password"></input>
              <button type="submit"> <b>SIGN IN</b> </button>
              <p>Already have an account? <a href="/signup">Sign up</a></p>
            </div>
          </div>
        <Footer/>
      </body>
    );
  }
}

export default Signin;
