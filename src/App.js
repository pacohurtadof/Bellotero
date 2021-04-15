import './App.css';
import Testimonials from './pages/testimonial'
import Configurator from './pages/configurator'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/testimonials">
          <Testimonials></Testimonials>
        </Route>
        <Route path="/configurator">
          <Configurator></Configurator>
        </Route>
        <Route path="/">
          <Testimonials></Testimonials>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
