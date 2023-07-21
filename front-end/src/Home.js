import React, { useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { InventoryContext } from './App';
import './style/home.css';
// import ItemDetails from './ItemDetails';

const ItemDetails = ({ item }) => (
  <div>
    {item.name}
    {item.description}
    {item.quantity}
  </div>
);

const Home = () => {
  const inv = useContext(InventoryContext);
  const [ details, setDetails ] = useState({});

  return (
    <>
    <section className='items'>
      {console.log(inv)}
      {inv.map((item, index) => (
          <Link key={index} onClick={() => {setDetails(item)}} to={`${item.id}`}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description.substring(0, 100)}</p>
              <p>In Stock: {item.quantity}</p>
            </div>
          </Link>
      ))}
    </section>
    <Routes>
      <Route path='/:id' element={<ItemDetails item={details}/>}/>
    </Routes>
    </>
  )
}

export default Home;
