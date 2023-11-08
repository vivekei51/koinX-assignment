import React, { useState } from 'react';
import './Button.css';

const Button = ({ sendDataToParent2 }) => {
  const [text, setText] = useState("Short Term");
  const [ltext, setLText] = useState("Long Term");
  const [active, setactive] = useState(false);
  const [sflag, setsflag] = useState(false);
  const[active1,setactive1]=useState(false);
  const handleClick1 = () => {
    setText("Short Term ✓");
    setLText("Long Term");
    setsflag(false);
    setactive(true);
    setactive1(false);
  };

  const handleClick2 = () => {
    setLText("Long Term ✓");
    setText("Short Term ");
    setsflag(true);
    setactive1(true);
    setactive(false);
  };
  sendDataToParent2(sflag);
  return (
    <div className="button-container">
      <div className="lbutton">
        <button
          className={`button ${active ? "active1" : ""} btn1`}
          onClick={() => {
            handleClick1();
          }}
        >
          <span className="text">{text} </span>
        </button>
        <h4 className="btn">{"<12 months"}</h4>
      </div>
      <div className="lbutton lbutton1">
        <button
          className={`button btn2 ${active1 ? "active2" : ""} btn1`}
          onClick={() => {
            handleClick2();
          }}
        >
          <span className="text">{ltext}</span>
        </button>
        <h4 className="btn">{">12 months"}</h4>
      </div>
    </div>
  );
};

export default Button;
