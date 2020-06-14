import React, { Component } from 'react';
import Map from './Map'

// import GoogleApiWrapper from './GoogleApiWrapper';

class App extends Component {

    

  render() {
 

    return (
        <div className='container'>
            <div className='Welcome'>
                <h1>Sweet San Diego Sunsets</h1>
                <h2>Welcome to our website!</h2>
            </div>
            <div id="map">
              <Map/>
            </div>
        </div>
    );
  }
}


export default App;