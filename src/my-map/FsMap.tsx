import React, { useEffect, useRef } from 'react';
import './FsMap.css';
import { Map, View } from 'ol';
import { transform } from 'ol/proj';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile';

const FsMap = (props) => {
	const mapContainer = useRef(null);

	let point = [31, 49];
	let zoom = 7;

	useEffect(() => {
		var map = new Map({ target: 'map' });
		map.getView().setCenter(transform(point, 'EPSG:4326', 'EPSG:3857'));
		map.getView().setZoom(zoom);
		map.addLayer(
			new TileLayer({
				source: new OSM({
					url: 'https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
				}),
			})
		);
	}, []);

	// console.log(JSON.stringify(props.children));
	console.log(props.children);
	// mapContainer.current.appendChild(map);

	// return <div className="map-container" ref={mapContainer}></div>;
	return <div id="map" className="map"/>;
};

export default FsMap;