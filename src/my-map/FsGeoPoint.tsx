import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';

import Point from 'ol/geom/Point.js';
import Feature from 'ol/Feature.js';
import * as olProj from 'ol/proj';

const FsGeoPoint = (props, vectorSource) => {

	let oFeature = new Feature({
		geometry: new Point(
			olProj.fromLonLat([props.lon, props.lat])
		),
		stroke: new Stroke({color: '#fff'}),
		fill: new Fill({ color: '#3399CC'}),
		radius: 10
	});

	vectorSource.addFeature(oFeature);

	return "";
}

export default FsGeoPoint;