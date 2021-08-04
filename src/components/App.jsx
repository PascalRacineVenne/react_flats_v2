import React, { Component } from 'react';

import FlatList from './FlatList';
import Map from './Map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
