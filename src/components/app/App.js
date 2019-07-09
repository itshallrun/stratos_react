import "./normalize.css"
import React from 'react';
import {HashRouter, Route, Redirect} from "react-router-dom"

import Timeline from "../timeline/timeline"
import Dashboard from "../dashboard/dashboard"
import FlightControl from "../flight_control/flight_control"
import Settings from "../settings/settings"
import Imprint from "../imprint/imprint"
import Login from "../login/login"

import Sidebar from "../navigation/sidebar"
import {SidebarToggler} from "../navigation/sidebarToggler/sidebarToggler"
import "./App.css"


export default class App extends React.Component {

    state = {
        expanded: false,
        user: {
            isAuthenticated: false
        }
    };

    onToggle = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    };


    render() {

        return <HashRouter>
            <div className="wrapper">

                <nav>
                    <Sidebar onToggle={this.onToggle}
                             expanded={this.state.expanded}/>
                </nav>

                <main>

                    <menu>
                        <SidebarToggler expanded={this.state.expanded} onToggle={this.onToggle}/>
                    </menu>

                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/timeline" component={Timeline}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/flug_kontrolle" component={FlightControl}/>
                    <Route path="/impressum" component={Imprint}/>
                    <Route path="/einstellungen" render={props => {
                        return this.state.user.isAuthenticated ?
                            (Settings)
                            : (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>)
                    }}/>
                    <Route path="/login" component={Login}/>


                </main>
            </div>

        </HashRouter>

    }
}

