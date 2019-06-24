import React from "react"
import "./valueCard.css"

export const ValueCard = (props) => {

    return <div className="valueCard">
        <h5 className="valueCard_name">{props.name}</h5>
        <p className="valueCard_value">{props.value}
            <span className="valueCard_unit">&nbsp;{props.unit}</span>
        </p>
    </div>
}