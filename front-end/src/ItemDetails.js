import React, { useContext } from 'react';
import { InventoryContext } from './App';

const ItemDetails = () => {
  const inventory = useContext(InventoryContext);

  return (
    // <div className='details'>
    //   {inventory.map((item, index) => (
    //     <div key={index}>
    //       <h3>{item.name}</h3>
    //       <p>{item.description}</p>
    //       <p>In Stock: {item.quantity}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
    </div>
  );
};

export default ItemDetails;
