import React from "react"

export class SidebarToggler extends React.Component {
    render() {
        return (
            <button className="sidebarToggler"
                onClick={this.props.onToggle}>
                <i className="fa fa-bars"/>
            </button>
        );
    }
}