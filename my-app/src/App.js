import React from 'react';
import './App.css';
import FoodContainer from './containers/FoodContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FoodContainer/>
      
    </div>
  );
}
// state 
//allitems, fridge
//
export default App;
