import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import Dashboard from "../dashboard/dashboard"
import FlightControl from "../flight_control/flight_control"
import Settings from "../settings/settings"
import Imprint from "../imprint/imprint"

import Sidebar from "../navigation/sidebar"
import {SidebarToggler} from "../navigation/sidebarToggler/sidebarToggler"


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
       const expanded =  this.state.expanded

        return <div>

            <BrowserRouter>

                        <nav>
                            <Sidebar onToggle={this.onToggle} expanded={this.state.expanded}/>
                        </nav>

                        <main style={{
                            marginLeft: expanded? 230 : 60,
                            transition: "margin 1s"
                        }}>

                            <SidebarToggler onToggle={this.onToggle}/>

                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="/flug_kontrolle" component={FlightControl}/>
                            <Route path="/einstellungen" component={Settings}/>
                            <Route path="/impressum" component={Imprint}/>

                        </main>

            </BrowserRouter>
        </div>
    }
}

export default App;
