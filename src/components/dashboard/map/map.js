import {GoogleMap, withGoogleMap, withScriptjs, Polyline} from "react-google-maps"
import React from "react"
import "./map.css"


export default withScriptjs(withGoogleMap((props) => {

    return <GoogleMap
        defaultCenter={{lat: 49.2351, lng: 6.9739}}
        defaultZoom={13}>
        <Polyline options={{strokeColor: "green"}} path={props.data}/>
        <div id="legend">
            <span style={{
                color: "green",
                fontWeight: "bolder",
                fontSize: " 1.2em"
            }}>-</span> Flugroute
            <br/>
            <span style={{
                color: "orange",
                fontWeight: "bolder",
                fontSize: " 1.2em"
            }}>-</span> Vorhersage
        </div>
    </GoogleMap>
}));

