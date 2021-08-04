import React from 'react';

import Flat from './Flat';

const FlatList = (props) => {
  const renderedList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          selected={flat.name === props.selectedFlat.name}
          key={flat.lat}
          index={index}
          selectFlat={props.selectFlat}
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
