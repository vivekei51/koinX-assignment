import React, { useState } from 'react';
import Select from 'react-select';
import './Home.css'
import Button from './Button';
import CustomSelect from './Content';
import Hidden from './Hidden';
const data = [
  {
    year: "FY 2023-24",
  },

];

const countries = [
  {
    name: 'Australia',
    logo: 'pngegg.png',
  },

];

const Home = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dataFromChild, setDataFromChild] = useState(null);
  const [dataFromChild1, setDataFromChild1] = useState(null);
  const [dataFromChild2, setDataFromChild2] = useState(null);
  const [purchase, setPurchase] = useState(0);
  const [sale, setSale] = useState(0);
  const [expense, setExpense] = useState(0);

  const handlePurchaseChange = (e) => {
    setPurchase(parseFloat(e.target.value) || 0);
  };

  const handlePurchaseChange1 = (e) => {
    setSale(parseFloat(e.target.value) || 0);
  };

  const handlePurchaseChange2 = (e) => {
    setExpense(parseFloat(e.target.value) || 0);
  };
  // Define a function to receive data from the child
  const receiveDataFromChild = (data) => {
    setDataFromChild(data);
  };
  const receiveDataFromChild1 = (data) => {
    setDataFromChild1(data);
  };
  const receiveDataFromChild2 = (data) => {
    setDataFromChild2(data);
  };
  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const yearOptions = data.map((year) => ({
    value: year.year,
    label: year.year,
  }));

  const countryOptions = countries.map((country) => ({
    value: country.name,
    label: (
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/asets/${country.logo}`}
          alt={country.name}
          style={{ width: "20px" }}
        />{" "}
        {country.name}
      </div>
    ),
  }));
  const customStyles = {
    control: (provided) => ({
      ...provided,

      backgroundColor: "transparent",
      display: "flex",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    boxShadow: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
  };
  return (
    <div className="home">
      <h1 className="header">Free Crypto Tax Calculator Australia</h1>
      <div className="form1">
        <div className="bind-two bind-two1">
          <div className="leftview">
            <label className='label'>Financial Year</label>
            <Select
              value={selectedYear}
              onChange={handleYearChange}
              options={yearOptions}
              isSearchable
              styles={customStyles}
              className="select-one"
            />
          </div>
          <div className="leftview">
            <label className='label label1'>Country</label>
            <Select
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countryOptions}
              isSearchable
              styles={customStyles}
              className="select-one select-one1"
            />
          </div>
        </div>
              <div className='horizontal-row'></div>
        <div className="bind-two">
          <div className="input-container">
            <label className='label'>Enter purchase price of Crypto</label>
            <div className="input-with-dollar">
              <span className="dollar-sign">$</span>
              <input
                type="number"
                id="price1"
                name="p1"
                placeholder="Enter price"
                step="0.01"
                onChange={handlePurchaseChange}
                className="button-style"
              />
            </div>
          </div>
          <div className="input-container">
            <label className='label'>Enter sale price of Crypto</label>
            <div className="input-with-dollar">
              <span className="dollar-sign">$</span>
              <input 
                type="number"
                id="price2"
                name="p3"
                placeholder="Enter price"
                step="0.01"
                onChange={handlePurchaseChange1}
                className="button-style"
              />
            </div>
          </div>
        </div>
        <div className="bind-two">
          <div className="input-container">
            <label className='label'>Enter your Expenses</label>
            <div className="input-with-dollar">
              <span className="dollar-sign">$</span>
              <input
                type="number"
                id="price3"
                name="p3"
                placeholder="Enter price"
                step="0.01"
                onChange={handlePurchaseChange2}
                className="button-style"
              />
            </div>
          </div>
          <div className="input-container">
            <label className='label label-I'>Investment type</label>
            <div className="input-with-dollar ">
              <Button sendDataToParent2={receiveDataFromChild2} />
            </div>
          </div>
        </div>
        <div className="bind-two">
          <div className="input-container">
            <CustomSelect
              className="select-one"
              sendDataToParent={receiveDataFromChild}
              sendDataToParent1={receiveDataFromChild1}
            />
          </div>
          <div className="input-container tax-rate">
            <label className='label Tax-rate'>Tax Rate:</label>
            <p className='rate-show'>{dataFromChild}</p>
          </div>
        </div>
        {dataFromChild2 && (
          <Hidden purchase={purchase} sale={sale} expense={expense} />
        )}
        <div className="bind-two">
          <div className="input-container">
       
              <div className="button-style2">
              <h className="tag-show">Net capital gain tax amount</h>
               <div className='clr1'> ${dataFromChild2
                  ? (purchase - sale - expense) / 2
                  : purchase - sale - expense}
                  </div>
              </div>
          </div>
          <div className="input-container">
              <div className="button-style2">
                <h className='tag-show'>The tax you need to pay*</h>
               <div className='clr'> ${dataFromChild2
                  ? ((purchase - sale - expense) * dataFromChild1) / 200
                  : ((purchase - sale - expense) * dataFromChild1) / 100}
                  </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
