import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomepageImage, Blog, Signup, Signin } from './components';

class App extends Component {
  render() {
        return (
          <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={ HomepageImage } />
                    <Route path="/profile" component={ Blog } />
                    <Route path="/signup" component={Signup}/>
                    <Route path="/signin" component={Signin}/>

                </Switch>
          </BrowserRouter>
        );
    }
}

export default App;
