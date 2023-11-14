import { Map, View } from 'ol';
import React, { Children, useEffect, useRef } from 'react';

const FsControll = (props, map) => {

	let renderState = [];

	const handleShow = (e) => {
		console.log('FsControll click: ' + e);
		// props.onLayerChanged(e, "controller data");
	};
	
	React.Children.map(props.children, (child, index) => {

		let res = child.type( { ...child.props, show:handleShow , key: index} );
		renderState = [...renderState, res];
	});
	
	return renderState;
}

export default FsControll;