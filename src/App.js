import { useState } from "react";
import StateSelector from "./Component/StateSelector";
import './App.css';

function App() {
const [selectState, setSlectedState] = useState("");

const handleChange = (e) => {
  setSlectedState(e.target.value);
}

  return (
    <div className="app">
      <h1>Bharat Weather Dashboard</h1>

      <StateSelector 
      selectState  = {selectState}
      onChange = {handleChange}
      ></StateSelector>
      {selectState && (
        <div className="weather-card">
          <h2>{selectState}</h2>
          <p>Weather details will appear here</p>
        </div>
      )}
    </div>
  );
}

export default App;
