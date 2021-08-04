import React from 'react';

import Flat from './Flat';

const FlatList = (props) => {
  const renderedList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          index={index}
        />
      );
    });
  };
  return (
    <div className="flat-list">
      {renderedList()}
    </div>
  );
};

export default FlatList;
