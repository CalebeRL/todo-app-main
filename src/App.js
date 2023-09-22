import React from 'react';
import Header from './components/Header/Header';
import Provider from './context/Provider';
import './index.css';
import BodyList from './components/BodyList/BodyList';

function App() {
  return (
    
    <Provider>
      <Header/>
      <BodyList/>
    </Provider>

  );
}

export default App;
