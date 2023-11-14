import React, { useEffect, useRef } from 'react';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const FsUserLayer = (props, map) => {

	let oVectorSource = new VectorSource({wrapX: false});

	React.Children.map(props.children, child => {
		child.type(child.props, oVectorSource);
	});

	map.addLayer(new VectorLayer({source: oVectorSource}));

	return ""
}

export default FsUserLayer;