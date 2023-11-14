import { Map, View } from 'ol';
import React, { useEffect, useRef } from 'react';

const FsLayers = (props) => {
	
	React.Children.map(props.children, child => {
		child.type(child.props, props.map);
	});
	
	return ""
}

export default FsLayers;