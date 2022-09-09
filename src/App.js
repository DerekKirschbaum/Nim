import React from "react"
import Line from "./Line.js"

export default function App () {

  const [lines, setLines] = React.useState(newGame())
  console.log(lines)

  function newLineObject(id) {
    return {
      key: id,
      value: id,
      isCrossed: false,
      redPlayer: true
    }
  }

  function newGame() {
    const newLines = []
    for(let i = 1; i<16; i++) {
      newLines.push(newLineObject(i))
    }
    
  }

  const lineElements = lines.map(line => (
    <Line 
      key={line.key}
      value={line.value}
      isCrossed={line.isCrossed}
      redPlayer={line.redPlayer} 
    />
  ))
  

  return (
    <div className="App">
      <div className="info">
        <h1 className="title">Pyramid Nim</h1>
        <p className="instructions">Players alternate turns, crossing off as many 
          adjacent lines in the same row as they want. 
          The winner is the player that crosses off the last line.</p>
      </div>
      <div className="gamebox">
        
      </div>
      

    </div>

  );
};
