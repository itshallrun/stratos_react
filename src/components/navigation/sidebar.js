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

        const Link = (props) => <NavLink to={props.to}>
            <i className={props.icon}/>
            <span className={props.expanded ? "visible" : "hidden" }>{props.text}</span>
        </NavLink>

        const expanded = this.state.expanded;

        return (

            <div className={"sidebar " + (expanded?"nav_expanded":"nav_contracted")}>
                <img className={"logo " + (expanded ? "logo_large" : "logo_small")} src={logo}
                     alt="stratos logo"/>

                <Link to="/timeline" icon="fa fa-clock-o" expanded={expanded} text="Timeline"/>

                <Link to="/dashboard" icon="fa fa-dashboard" expanded={expanded} text="Dashboard"/>

                <Link to="/einstellungen" icon="fa fa-gears" expanded={expanded} text="Einstellungen"/>

                <Link to="/flug_kontrolle" icon="fa fa-paper-plane-o" expanded={expanded} text="Flug Kontrolle"/>

                <Link to="/impressum" icon="fa fa-info" expanded={expanded} text="Impressum"/>


            </div>


        );
    }
}


export default Sidebar;