import React, {Component} from 'react';
import "./dashboard.css"
import Map from "./map"


import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {ValueCard} from "./valueCard/valueCard"


const options = {
    title: {
        text: 'Sensorendiagramm Live'
    },
    series: [{
        data: [1, 2, 3]
    }]
}


class Dashboard extends Component {
    render() {



        return (
            <div className="grid-container">



                <div className="map">

                    <Map
                        loadingElement={<div>loading</div>}
                        containerElement={ <div style={{ height: "100%", width: '100%' }} /> }
                        mapElement={ <div style={{ height: `100%` }} /> }
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxq4sRNN4lmkITiXz3AGB0w1UQGV6aGJY"
                    />


                </div>



                <div className="chart">

                    <HighchartsReact
                        containerProps={{style:{height:"100%"}}}
                        highcharts={Highcharts}
                        options={options}
                    />

                </div>


                <div className="live_values">
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                    <ValueCard name="Höhe" value="1000" unit="m"/>
                </div>
            </div>
        );
    }
}

export default Dashboard;