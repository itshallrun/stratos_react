import React from "react"
import "./liveValues.css"

class LiveValues extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            liveValues: {...this.props.data}

        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (this.props !== nextProps) {
            this.setState({
                liveValues: {...nextProps.data}
            })
        }
    }


    render() {
        return Object.keys(this.state.liveValues).map((key) => {

            if(key==="geo"){
                return ""
            }

            const value = this.state.liveValues[key]

            return <div className="valueCard" key={key}>
                <h5 className="valueCard_name">{value.name}</h5>
                <p className="valueCard_value">{value.data.slice(-1)[0][1].toString()}
                    <span className="valueCard_unit">&nbsp;{value.unit}</span>
                </p>
            </div>


        });
    }
}

export default LiveValues;