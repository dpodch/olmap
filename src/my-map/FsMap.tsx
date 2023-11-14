import React, { useEffect, useRef, useState } from 'react';
import './FsMap.css';
import { Map, View } from 'ol';
import { transform } from 'ol/proj';

const FsMap = (props) => {
	const mapContainer = useRef(null);
	// const [renderState, setRenderState] = useState(undefined);
	const [fsmap, setMapState] = useState(undefined);

	let point = [25, 49];
	let zoom = 7;

	useEffect(() => {
		var _fsmap = new Map({ target: 'map' });
		_fsmap.getView().setCenter(transform(point, 'EPSG:4326', 'EPSG:3857'));
		_fsmap.getView().setZoom(zoom);
		console.log("FsMap : 1")
		setMapState(_fsmap);
	}, []);

	let renderState:JSX.Element[] = []
	if (fsmap)
	{
		console.log("FsMap : 2")
		renderState = React.Children.map(props.children, (child, index) => {
			return child.type({...child.props, map:fsmap, key:index});
		});
	}

	return (
	<div>
		<div>
			{renderState}
		</div>
		<div id="map" className="map"/>
	</div>
	);
};

export default FsMap;
