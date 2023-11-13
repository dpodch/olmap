import React, { Component } from 'react';
import { render } from 'react-dom';
import MyMap from './my-map/myMap';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

const mapIsReadyCallback = (map) => {
  console.log(map);
};
const App = () => {
  
  return <MyMap mapIsReadyCallback={mapIsReadyCallback} />;
};

render(<App />, document.getElementById('root'));
