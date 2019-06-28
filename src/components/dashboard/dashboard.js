import React, {Component} from 'react';
import "./dashboard.css"
import Map from "./map/map"


import Chart from "./chart/Chart"
import fake from "./faker/faker"
import LiveValues from "./liveValues/liveValues"

//now change
class Dashboard extends Component {
    constructor(props) {
        super(props)

        const now = Date.now()
        this.state = {
            fakeInterval: 1000,
            fakeData: {
                alt: {
                    name: "akt. Höhe",
                    unit: "m",
                    data: [[now, 0]]
                },
                sat: {
                    name: "Sat",
                    unit: "",
                    data: [[now, 5]]
                },
                tmp_out:{
                    name: "temp. außen",
                    unit: "°C",
                    data: [[now, 25]]
                },
                tmp_in:{
                    name: "temp. innen",
                    unit: "°C",
                    data: [[now, 26]]
                },
                tmp_bat:{
                    name: "temp. Bat",
                    unit: "°C",
                    data: [[now, 28]]
                },
                volt:{
                    name: "Spannung",
                    unit: "V",
                    data: [[now, 3.600]]
                },
                press:{
                    name: "Luftdruck",
                    unit: "bar",
                    data: [[now, 1.01]]
                },
                long:{
                    name: "Längengrad",
                    unit: "°",
                    data: [[now, 1.01]]
                },
                lat:{
                    name: "Breitengrad",
                    unit: "°",
                    data: [[now, 1.01]]
                },
                gps:{
                    name: "GPS",
                    unit: "",
                    data: [[now, true]]
                },
                max_h:{
                    name: "max. Höhe",
                    unit: "m",
                    data: [[now, 0]]
                },
                climb:{
                    name: "Steigrate",
                    unit: "m/s",
                    data: [[now, 0]]
                }

            }


        }

    }


    componentDidMount() {

        this.interval = setInterval(() => {


            const fakeData = fake(this.state.fakeData)


            this.setState({
                fakeData: fakeData
            })


        }, this.state.fakeInterval)

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        return (
            <div className="grid-container">


                <div className="map">

                    <Map
                        loadingElement={<div>loading</div>}
                        containerElement={<div style={{height: "100%", width: '100%'}}/>}
                        mapElement={<div style={{height: `100%`}}/>}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxq4sRNN4lmkITiXz3AGB0w1UQGV6aGJY"
                    />


                </div>


                <div className="chart">

                    <Chart data={this.state.fakeData}/>

                </div>


                <div className="live_values">
                    <LiveValues data={this.state.fakeData}/>
                </div>
            </div>
        );
    }
}

export default Dashboard;




