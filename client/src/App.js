import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from'./components/AppNavBar.js';
import ShoppingList from './components/ShoppingList.js' ;

function App() {
  return (
    < div className="App" > <AppNavBar/>
    <ShoppingList/>
    </div>
      
  
  )};
export default App;

