import React from 'react';
import './App.css';
import { Navbar, Header, Browse,Footer } from './components';
// import {About, Shop} from './containers';

const App = () => {
  return (
    <div className="App">    
      <Navbar/>
      <Header/>
      <Browse/>
      <Footer/>
    </div>
  );
}

export default App;
