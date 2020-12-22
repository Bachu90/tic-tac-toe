import React from "react";
import "./App.scss";
import Game from "./components/Game";
import StoreProvider from "./store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Game />
      </StoreProvider>
    </div>
  );
}

export default App;
