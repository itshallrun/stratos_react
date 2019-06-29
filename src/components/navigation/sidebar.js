import React, {Component} from 'react';
import "./sidebar.css"
import {NavLink} from "react-router-dom"
import logo from '../logo/logo_2016.png'

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: props.expanded
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.expanded !== this.props.expanded) {
            this.setState({
                expanded: this.props.expanded
            })
        }
    }


    render() {

        const expanded = this.state.expanded;

        return (

            <div className={"sidebar"}
                 style={{
                     width: expanded ? 230 : 60
                 }}>
                <img className={"logo " + (expanded ? "logo_large" : "logo_small")} src={logo}
                     alt="stratos logo"/>

                <NavLink to="/timeline">
                    <i className="fa fa-clock-o"/>
                    <span style={{display: expanded ? "inline-block" : "none"}}>Timeline</span>
                </NavLink>

                <NavLink to="/dashboard">
                    <i className="fa fa-dashboard"/>
                    <span style={{display: expanded ? "inline-block" : "none"}}>Dashboard</span>
                </NavLink>

                <NavLink to="/flug_kontrolle">
                    <i className="fa fa-paper-plane-o"/>
                    <span style={{display: expanded ? "inline-block" : "none"}}>Flug Kontrolle</span>
                </NavLink>

                <NavLink to="/einstellungen">
                    <i className="fa fa-gears"/>
                    <span style={{display: expanded ? "inline-block" : "none"}}>Einstellungen</span>
                </NavLink>

                <NavLink to="/impressum">
                    <i className="fa fa-info"/>
                    <span style={{display: expanded ? "inline-block" : "none"}}>Impressum</span>
                </NavLink>


            </div>


        );
    }
}

export default Sidebar;