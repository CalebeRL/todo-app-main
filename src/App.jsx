import React, { useContext } from 'react';
import Header from './components/Header/Header';
import BodyList from './components/BodyList/BodyList';
import AppContext from './context/AppContext';
import FooterList from './components/FooterList/FooterList';
import './index.css';

function App() {

  const { theme, list, checkedList } = useContext(AppContext);
  
  return (
    <div className="App" id={theme}>
      <Header/>
      <BodyList/>
      {checkedList && list.length > 0 ? <FooterList/> : null}
      {checkedList && list.length > 0 ? <p>Drag and drop to reorder list</p> : null}
    
    </div>
  );
}

export default App;
