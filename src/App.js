export default function App () {
  return (
    <div className="App">
      <div className="info">
        <h1 className="title">Pyramid Nim</h1>
        <p className="instructions">Players alternate turns, crossing off as many 
          adjacent lines in the same row as they want. 
          The winner is the player that crosses off the last line.</p>
      </div>
      <div className="gamebox">
        <Line />
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
      </div>
      

    </div>

  );
};
