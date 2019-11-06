import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomepageImage, Blog, Signup, Signin, SignInWith } from './components';
import requireAuthentication from './utils/requireAuth';

class App extends Component {
  render() {
    const pathname = window.location.pathname
        return (
          <BrowserRouter>
            { !pathname.includes('editor') ? <Header /> : '' }
            <SignInWith/>

                <Switch>

                    <Route exact path="/" component={ HomepageImage } />
                    <Route path="/profile" component={ Blog } />
                    <Route path="/signup" component={ Signup }/>
                    <Route path="/signin" component={ Signin }/>
                    <Route path="/editor" component={requireAuthentication(Editor)} />

                </Switch>
          </BrowserRouter>
        );
    }
}

export default App;
