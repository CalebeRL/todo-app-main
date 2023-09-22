import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  const [ list, setList ] = useState(['arroz']);
  const [ checkedList, setCheckedList ] = useState([]);
  const [ filter, setFilter ] = useState('all');
  const [ clearCompleted, setClearCompleted ] = useState(false);
  const [ theme, setTheme ] = useState('light');

  const value = {
    list,
    setList,
    checkedList,
    setCheckedList,
    filter,
    setFilter,
    clearCompleted,
    setClearCompleted,
    theme,
    setTheme
  };

  return (
    <AppContext.Provider value = { value }>
      {children}
    </AppContext.Provider>
  );

}

export default Provider;

Provider.propTypes = {
  children: propTypes.any
}.isRequired;
