import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import SingleProduct from './Pages/SingleProduct'
import Header from './components/Header'
import Cart from './Pages/Cart'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product/:id">
        <SingleProduct />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Router>
  )
}

export default App
