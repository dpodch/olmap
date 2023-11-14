import React, { Component } from 'react';
import { render } from 'react-dom';
import FsMap from './my-map/FsMap';
import FsLayers from './my-map/FsLayers';
import FsGeoPoint from './my-map/FsGeoPoint';
import FsUserLayer from './my-map/FsUserLayer';
import FsTileLayer from './my-map/FsTileLayer';
import FsControll from './my-map/FsControll';
import FsTestButton from './my-map/FsTestButton';
import './style.css';


// interface Layer {
// 	id : string,
// 	meta : undefined
// }

// [ 
// 	{id : uniq_1, meta: "myMeta"},
// 	{id : uniq_2, meta: " myOtherMeta"},
// 	{id : uniq_3, meta: "customMeta", type: userLayer, points : [{lat, lon, icon}]}
// ]

// function generateLayers ( layers)
// {
// 	return layers.map((layer,index) =>{
// 		if (layer.type == "TILE_LAYER")
// 		{
// 			return <FsTileLayer url="https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"/>,
// 		}	
// 		return <FsUserLayer meta={layer.meta} key={layer.id}></FsUserLayer>;
// 	}

// 	)
// 	<FsTileLayer url="https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"/>,
// 	<FsUserLayer>
// 		<FsGeoPoint lat="10" lon="120"/>
// 	</FsUserLayer>,
// 	<FsUserLayer>
// 		<FsGeoPoint lat="47" lon="21"/>
// 	</FsUserLayer>
// }

// function addObjToLayer(layers, newObj) {
// 	return newLayers
// }

const App = () => 
{

	const layers = [
			<FsTileLayer url="https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"/>,
			<FsUserLayer>
				<FsGeoPoint lat="10" lon="120"/>
			</FsUserLayer>,
			<FsUserLayer>
				<FsGeoPoint lat="47" lon="21"/>
			</FsUserLayer>
			]

	return (
	<FsMap>
		<FsLayers>
			{layers}
		</FsLayers>
		<FsControll>
			<FsTestButton/>
		</FsControll>
	</FsMap>
	)
};

render(<App />, document.getElementById('root'));
