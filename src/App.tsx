import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const props = ["New Delhi", "Mumbai", "Kolkata"];
  const handleSelection = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup 
      items={props}
       heading="Cities" 
       onSelection={handleSelection} />
    </div>
  );
}

export default App;
