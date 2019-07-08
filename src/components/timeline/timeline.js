import React, {Component, Fragment} from 'react';
import {Timeline as TimelineScribble, Event} from "react-timeline-scribble";
import "./timeline.css"

class Timeline extends Component {
    render() {
        return (
            <div className="timeline_container">
                <Fragment>
                    <h1>Eventkalender</h1>
                    <TimelineScribble>
                        <Event interval={"04 Juli 19 - 15:00"} title={"Teststart"} subtitle={"Bierhalde in Ensdorf"}>
                            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum.
                        </Event>
                        <Event interval={"15 September 19 - 08:00"} title={"Campusfest - htw saar"}
                               subtitle={"Campus Rotenbühl"}>
                            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum.
                        </Event>
                    </TimelineScribble>
                </Fragment>
            </div>
        );
    }
}

export default Timeline;