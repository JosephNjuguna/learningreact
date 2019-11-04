import React, { Component} from 'react';

class Navigation extends Component {
  render(){
    return(
       <nav className="navigation">
         <ul className="nav1">
           <li>Learning React.</li>
         </ul>

         <ul className="nav2">
           <li>Github</li>
           <li>Twitter</li>
           <li>Facebook</li>
             <li><a href="/">Home</a></li>
             <li><a href="/profile">profile</a></li>
             <li><a href="/signup">signup</a></li>
             <li><a href="/signin">signin</a></li>
         </ul>
       </nav>
    );
  }
}

export default Navigation;
