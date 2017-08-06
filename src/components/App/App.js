import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ToppContainer from '../ToppContainer/ToppContainer';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      loggedIn: false
    }
  }

  logIn = () => {
    //  console.log( 'logging in' );
    //  return fetch( 'http://192.168.1.155:8080/auth/twitter' )
    //  .then( res => res.json() )
    //  .then( res => {
    //    console.log( res );
    //  })

  }

  render() {
    return ( 
      <div>
        <Navbar logIn={ this.logIn.bind( this ) }/>
        <ToppContainer />
      </div>
    );
  }
}

export default App;