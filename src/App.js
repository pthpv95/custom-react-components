import React from "react"
import "./App.css"
import NumberFormat from './Customs/CustomNumberFormat';

function App() {
  return (
    <div className="App">
      <NumberFormat value={'123x456'} onValueChanged={(value) => {
        console.log(value);
      }} />
    </div>
  )
}

export default App
