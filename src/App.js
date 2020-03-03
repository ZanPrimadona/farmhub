import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <ProductsList />
      <Login />
    </div>
  );
}

export default App;
