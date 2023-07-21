import React, { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

export const InventoryContext = createContext();

function App() {
  const [inv, setInv]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/shop');
        const data = await response.json();
        setInv(data);
        console.log(data);
        console.log(inv);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <InventoryContext.Provider value={inv}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </InventoryContext.Provider>
  )
}

export default App;
