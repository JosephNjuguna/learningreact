import React, { Component } from 'react';
import { Navigation, Footer } from './';

class HomepageImage extends Component{
  render(){
    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    return (
      <div>
        <Navigation/>
        <img src={url} style={{width: 650}} alt='Golden Gate Bridge' />
        <a href="/profile">profile</a>
        <Footer/>
      </div>
    );
  }
}
export default HomepageImage;
