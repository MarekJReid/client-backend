import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layout/navbar'
import Dashboard from './Components/Dashboard/dashboard';
import ProjectDetails from './Components/Projects/projectDetails'
import signIn from './Components/Auth/signIn'
import signUp from './Components/Auth/signup'
import CreateProject from './Components/Projects/createProject'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={signIn} />
            <Route path='/signup' component={signUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;





