import { Map, View } from 'ol';
import React, { useEffect, useRef } from 'react';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile';

const FsTileLayer = (props, map) => {

	map.addLayer(
		new TileLayer({
						source: new OSM({
								url: props.url
						}),
				})
		);

		return "";
}

export default FsTileLayer;