import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: "/graphql"
  // uri: "http://localhost:5000/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }} />
            <Route exact path='/' component={Launches} />
            <Route path='/launch:flight_number' component={Launch} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
