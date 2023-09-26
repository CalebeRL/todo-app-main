import React, { useRef, useContext } from 'react';
import AppContext from '../../context/AppContext';
import './InputList.css';

function InputList () { 

  const { list, setList, checkedList, setCheckedList } = useContext(AppContext);

  const inputListRef = useRef(null);
  const checkboxInputRef = useRef(null);
        
  function handleSubmit (event) {
    event.preventDefault();

    const inputValue = inputListRef.current.value;
    inputListRef.current.value = '';
    setList([...list, inputValue]);

    if (!checkboxInputRef.current.checked) {
      checkedList.push('o');   
    } else {
      checkedList.push('x');   
    }
    
    setCheckedList([...checkedList]);
  }

  return (
        
    <div className="form-list">
      <div className="input-checkbox__wrapper">
        <input 
          className="input-checkbox" 
          ref={checkboxInputRef}  
          type="checkbox"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          className="input-list" 
          type="text" 
          placeholder="Create a new Todo..."
          ref={inputListRef}
        />
      </form>
    </div> 

  );


}

export default InputList;
