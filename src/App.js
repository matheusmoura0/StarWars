import React from 'react';
import './App.css';
import ContextProvider from './helpers/Provider';
import Table from './pages/Table';

function App() {
  return (
    <div>
      <ContextProvider>
        <Table />
      </ContextProvider>
    </div>
  );
}

export default App;
