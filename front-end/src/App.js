import React from 'react';
import './style/app.css';
import Header from './Header';

// fetch('http://localhost:8080/')
// .then(data => data.json())
// .then(res => console.log(res))


function App() {
  return (
    <>
    <Header />
    <section className='inventory'>
      <label>label</label>
    </section>
    </>
  );
}

export default App;
