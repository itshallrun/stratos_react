import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps"
import React from "react"

export default withScriptjs(withGoogleMap(() => (
    <GoogleMap
        defaultCenter={{lat: 40.756795, lng: -73.954298}}
        defaultZoom={13}

    />
)));
