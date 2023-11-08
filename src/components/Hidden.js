import React, { useEffect } from 'react'
import { useState } from 'react';
import  './Hidden.css'
const Hidden = (props) => {
    const{ purchase, sale, expense} = props;
    const [capgain, setcapgain] = useState(0);
    const [discnt, setdiscnt] = useState(0);
    useEffect(() => {
        const newCapgain = purchase - sale - expense;
        const newDiscnt = newCapgain / 2;
        setcapgain(newCapgain);
        setdiscnt(newDiscnt);
      }, [expense]);
       
  return (
    <div className="box-container">
      <div className="box">
        <label className="label">Capital gains amount</label>
        <div className="button-style1"> ${capgain}</div>
      </div>
      <div className="box">
        <label className="label">Discount for long term goals</label>
        <div className="button-style1">${discnt}</div>
      </div>
    </div>
  
  )
}

export default Hidden
