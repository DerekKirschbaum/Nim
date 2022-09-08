
export default function Line(props) {
    return (
        <div>
            <button>
                <img className="tallys" 
                    src={require('./images/BlueCrossedLine.png')} 
                    alt="Blue Crossed Line">
                </img>
            </button>
            <button>
                <img className="tallys" 
                    src={require('./images/RedCrossedLine.png')} 
                    alt="Red Crossed Line">
                </img>
            </button>
            <button>
                <img className="tallys" 
                    src={require('./images/BlackLine.png')} 
                    alt="Black Line">
                </img>
            </button>
        </div>
    )
}