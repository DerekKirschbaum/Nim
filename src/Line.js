import React from "react"

export default function Line(props) {
    return (
        <div className="line">
            <button>
                {props.isCrossed && <img className="tallys" 
                    src={require('./images/BlueCrossedLine.png') }
                    alt="Blue Crossed Line">
                </img>}
                {!props.isCrossed && <img className="tallys" 
                    src={require('./images/BlackLine.png') }
                    alt="Black Line">
                </img>}
            </button>
        </div>
    )
}