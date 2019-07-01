import React, {Component} from 'react';
import "./dashboard.css"
import Map from "./map/map"
import {GoogleMapsApiKey} from "../../config.js"


import Chart from "./chart/Chart"
import fake from "./faker/faker"
import LiveValues from "./liveValues/liveValues"


class Dashboard extends Component {
    constructor(props) {
        super(props)

        const now = Date.now()
        this.state = {
            fakeInterval: 1000,
            data: {
                alt: {
                    name: "akt. Höhe",
                    unit: "m",
                    data: [[now, 0]]
                },
                climb: {
                    name: "Steigrate",
                    unit: "m/s",
                    data: [[now, 0]]
                },
                max_h: {
                    name: "max. Höhe",
                    unit: "m",
                    data: [[now, 0]]
                },
                tmp_out: {
                    name: "temp. außen",
                    unit: "°C",
                    data: [[now, 25]]
                },
                tmp_in: {
                    name: "temp. innen",
                    unit: "°C",
                    data: [[now, 26]]
                },
                tmp_bat: {
                    name: "temp. Bat",
                    unit: "°C",
                    data: [[now, 28]]
                },
                lng: {
                    name: "Längengrad",
                    unit: "°",
                    data: [[now, 6.9739]]
                },
                lat: {
                    name: "Breitengrad",
                    unit: "°",
                    data: [[now, 49.2351]]
                },
                gps: {
                    name: "GPS",
                    unit: "",
                    data: [[now, true]]
                },
                sat: {
                    name: "Sat",
                    unit: "",
                    data: [[now, 5]]
                },
                press: {
                    name: "Luftdruck",
                    unit: "bar",
                    data: [[now, 1.01]]
                },
                volt: {
                    name: "Spannung",
                    unit: "V",
                    data: [[now, 3.600]]
                },
                geo: {
                    data: [{timestamp: now, lng:6.9739, lat:49.2351}]
                }

            }


        }

    }


    componentDidMount() {

        let climbing = true


        this.interval = setInterval(() => {

            const fakeData = fake(this.state.data, climbing)

            if (fakeData.alt.data.slice(-1)[0][1] >= 35000) {
                climbing = false
            }

            if (fakeData.alt.data.slice(-1)[0][1] < 0 && !climbing) {
                clearInterval(this.interval);
            }


            if (fakeData.alt.data.slice(-1)[0][1] >= 0) {

                this.setState({
                    data: fakeData
                })
            }


        }, this.state.fakeInterval)

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        return (
            <div className="grid-container">


                <div className="flight_info">
                    <p>Gestartet am: {new Date(this.state.data.alt.data[0][0]).toLocaleDateString('de-DE', {
                        day : 'numeric',
                        month : 'short',
                        year : 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })}</p>
                    <p>Zuletzt empfangen am: {new Date(this.state.data.alt.data.slice(-1)[0][0]).toLocaleDateString('de-DE', {
                        day : 'numeric',
                        month : 'short',
                        year : 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })}</p>
                </div>


                <div className="map">

                    <Map
                        data={this.state.data.geo.data}
                        loadingElement={<div>loading</div>}
                        containerElement={<div style={{height: "100%", width: '100%'}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                        googleMapURL={"https://maps.googleapis.com/maps/api/js?key="+ GoogleMapsApiKey}
                    />


                </div>


                <div className="chart">

                    <Chart data={this.state.data}/>

                </div>


                <div className="live_values">
                    <LiveValues data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default Dashboard;




