import React, { useContext } from 'react';
import Header from './components/Header/Header';
import BodyList from './components/BodyList/BodyList';
import AppContext from './context/AppContext';
import './index.css';

function App() {

  const { theme } = useContext(AppContext);
  
  return (
    <div className="App" id={theme}>
      <Header/>
      <BodyList/>
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
