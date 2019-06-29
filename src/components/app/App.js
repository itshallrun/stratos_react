import "./normalize.css"
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import Timeline from "../timeline/timeline"
import Dashboard from "../dashboard/dashboard"
import FlightControl from "../flight_control/flight_control"
import Settings from "../settings/settings"
import Imprint from "../imprint/imprint"

import Sidebar from "../navigation/sidebar"
import {SidebarToggler} from "../navigation/sidebarToggler/sidebarToggler"
import "./App.css"


class App extends React.Component {

    state = {
        expanded: true
    };

    onToggle = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };


    render() {
        const {expanded} = this.state

        return <BrowserRouter>

            <nav>
                <Sidebar onToggle={this.onToggle}
                         expanded={this.state.expanded}/>
            </nav>

            <menu style={{
                marginLeft: expanded ? 240 : 70,
                transition: "margin 1s"
            }}>
                <SidebarToggler expanded={expanded} onToggle={this.onToggle}/>
            </menu>

            <main style={{
                marginLeft: expanded ? 240 : 70,
                transition: "margin 1s"
            }}>


                <Route exact path="/" component={Dashboard}/>
                <Route path="/timeline" component={Timeline}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/flug_kontrolle" component={FlightControl}/>
                <Route path="/einstellungen" component={Settings}/>
                <Route path="/impressum" component={Imprint}/>

            </main>

        </BrowserRouter>

    }
}

export default App;
