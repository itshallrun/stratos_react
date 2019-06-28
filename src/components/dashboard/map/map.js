import {GoogleMap, withGoogleMap, withScriptjs, Polyline} from "react-google-maps"
import React from "react"


export default withScriptjs(withGoogleMap((props) => {

    return <GoogleMap
        defaultCenter={{lat: 49.2351, lng: 6.9739}}
        defaultZoom={13}>
        <Polyline path = {props.data}/>
    </GoogleMap>
}));
