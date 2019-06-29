import React from "react"
import "./sidebarToggler.css"


export class SidebarToggler extends React.Component {
    render() {
        return (
            <button className="sidebarToggler"
                    onClick={this.props.onToggle}>
                <i className={this.props.expanded ? "fa fa-angle-double-left" : "fa fa-bars"}/>
            </button>
        );
    }
}