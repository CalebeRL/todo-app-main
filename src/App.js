import React from 'react';
import Header from './components/Header/Header';
import Provider from './context/Provider';
import './index.css';

function App() {
  return (
    
    <Provider>
      <Header/>
    </Provider>

  );
}

export default App;
