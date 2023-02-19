import React from "react";

import "./App.css";
import Box from "./Components/Box";

const newDices = (num) => {
  const tempNum = [];
  for (let i = 0; i < num; i++) {
    tempNum.push({
      value: Math.ceil(Math.random() * 6),
      id: i,
      clicked: false,
    });
  }
  return tempNum;
};

const App = () => {
  const [boxArray, setBoxArray] = React.useState(newDices(10));

  const handleClick = (id) => {
    setBoxArray((boxes) =>
      boxes.map((box) => {
        return id === box.id
          ? {
              ...box,
              clicked: !box.clicked,
            }
          : { ...box };
      })
    );
  };
  const handleRoll = () => {
    setBoxArray(boxes => boxes.map(
      box => (
        box.clicked ? {...box}:
        {...box,value:Math.ceil(Math.random() * 6)}
      )
    ))
  }
  const boxElements = boxArray.map((box) => {
    return (
      <Box
        key={box.id}
        value={box.value}
        clicked={box.clicked}
        id={box.id}
        handleClick={handleClick}
      />
    );
  });
  return (
    <div className="App">
      <div className="gameCanvas">{boxElements}</div>
      <div className='buttonsContainer'>
        <button 
        className='rollButton'
        onClick={handleRoll}>Roll Dice</button>
        <button 
        className='resetButton'
        onClick={() => setBoxArray(newDices(10))}>Reset</button>
      </div>
    </div>
  );
};

export default App;
