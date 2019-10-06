import React, { useState, useEffect } from "react"

const NumberFormat = ({ value, onValueChanged, fractionDigits = 2, ...props }) => {
  const [fomattedNumber, setFomattedNumber] = useState()

  useEffect(() => {
    formatNumber(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  function formatNumber(value) {
    const temp = value.replace(/,/g, "")
    if (isNaN(temp)) {
      return;
    }
    // limit fraction digits
    const dots = temp.split(".")
    if (dots && dots.length > 1) {
      if (dots[1].length > fractionDigits){
        return temp;
      }
    }

    const formattedValue = temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    setFomattedNumber(formattedValue);
    return temp;
  }

  const onChange = e => {
    const value = formatNumber(e.target.value);
    if(value){
      onValueChanged(value)
    }
  }
  return (
    <div>
      <input type="text" value={fomattedNumber} onChange={onChange} />
    </div>
  )
}

export default NumberFormat
