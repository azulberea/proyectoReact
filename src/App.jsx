import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import React from 'react'
import { CartProvider } from './Context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} /> 
            <Route path='/carrito' element={<CartView />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1 style={{textAlign:"center"}}>error 404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
