import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a sanrioStore"}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"productos filtrados ^_^"}/>} /> 
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
