import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import './Content.css';

const options = [
  { value: '0%', label: '$0 - $18,200' },
  { value: 'Nil + 19% of the excess over $18,200', label: '$18,201 - $45,000' },
  { value: '$5,092 + 32.5% of the excess over $45,000', label: '$45,001 - $120,000' },
  { value: '$29,467 + 37% of the excess over $120,000', label: '$120,001 - $180,000' },
  { value: '$51,667 + 45% of the excess over $180,000', label: '$180,001+' },
];

function CustomSelect({sendDataToParent,sendDataToParent1}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState('');
  
     let taxRate;
  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (selected) {
      const selectedlabel = selected.label;
      const selectedValue = selected.value
      // Process the selected option and set the result
   
      if (selectedlabel ==='$0 - $18,200') {
       
        taxRate =0;
      } else if (selectedlabel ==='$18,201 - $45,000') {
        taxRate =19;
       
       
      } else if (selectedlabel ===  '$45,001 - $120,000') {
       
        taxRate =32.5;
      } else if (selectedlabel === '$120,001 - $180,000') {
    
        taxRate =37;
      } else if (selectedlabel === '$180,001+') {
        
        taxRate =45;
      }
      sendDataToParent(selectedValue);
      sendDataToParent1(taxRate);
    } else {
        sendDataToParent('');
      sendDataToParent1(0);; // Clear the result if nothing is selected
    }
  };
  
  // Sending data to the parent component via props
  
 


  return (
    <div className=''>
      <label className='label'>Select Your Annual Income</label>
      <Select className='slt' options={options} value={selectedOption} onChange={handleChange} />
    </div>
  );
}

export default CustomSelect;