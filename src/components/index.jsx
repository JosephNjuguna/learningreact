import React, { Component } from 'react';
import { Navigation, Footer } from './';

class HomepageImage extends Component{
  render(){
    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    return (
      <div className="body">
        <Navigation/>
        <div  className="homepage">
          <img src={url} alt='Golden Gate Bridge' />
        </div>
        <Footer/>
      </div>
    );
  }
}
export default HomepageImage;
