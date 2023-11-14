import React, { useEffect, useRef } from 'react';

const onClick = () => {
	console.log("!!!!");
};

const FsTestButton = (props) => {

	console.log("!!!! FsTestButton: " + props.show)
	return (
		<div>
			<button type="button" onClick={ () => {props.show("uknown meta")} }>Жми1</button>
		</div>
	);
}

export default FsTestButton;
