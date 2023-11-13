import React, { Component } from 'react';
import { render } from 'react-dom';
import FsMap from './my-map/FsMap';
import FsLayers from './my-map/FsLayers';
import './style.css';

const App = () => 
{
	return (
	<FsMap>
		<FsLayers/>
		<FsLayers/>
	</FsMap>
	)
};

render(<App />, document.getElementById('root'));
