import React from "react"
import "./App.css"
import NumberFormat from './Customs/CustomNumberFormat';

function App() {
  return (
    <div className="App">
      <h1>Hello {process.env.REACT_APP_NOT_SECRET_CODE}</h1>
      <NumberFormat value={'123x456'} onValueChanged={(value) => {
        console.log(value);
      }} />
    </div>
  )
}

export default App
