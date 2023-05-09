import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {

  const [mode, setMode] = useState(false)

  function handleClick() {
    setMode((currentMode) => !currentMode)
  }
  
  const appClass = mode ? "App dark" : "App light"

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
//! does line 22 mean if the mode is true then light? else dark? ...? why boolean?
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode ? 'Light' : 'Dark'} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
